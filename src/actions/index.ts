import { z } from 'astro/zod'
import { ActionError, defineAction } from 'astro:actions'
import { env } from 'cloudflare:workers'
import { Resend } from 'resend'

import { verifyTurnstileToken } from '../lib/turnstile'

const resend = new Resend(env.RESEND_API_KEY)

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const buildContactEmailHtml = ({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) => `
  <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #1a1a1a;">
    <h2 style="margin: 0 0 16px;">Nuevo mensaje de contacto</h2>
    <p style="margin: 0 0 8px;">
      <strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;
    </p>
    <p style="margin: 0 0 16px; color: #555;">${escapeHtml(subject)}</p>
    <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
  </div>
`

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z
        .string({ error: 'El nombre es obligatorio' })
        .min(3, { error: 'Debe tener al menos 3 caracteres' })
        .max(45, { error: 'No puede superar los 45 caracteres' }),
      email: z
        .email({
          error: iss =>
            iss.code === 'invalid_type'
              ? 'El correo es obligatorio'
              : 'El formato del correo es inválido',
        })
        .max(30, { error: 'No puede superar los 30 caracteres' }),
      subject: z
        .string({ error: 'El asunto es obligatorio' })
        .min(3, { error: 'Debe tener al menos 3 caracteres' })
        .max(30, { error: 'No puede superar los 30 caracteres' }),
      message: z
        .string({ error: 'El mensaje es obligatorio' })
        .min(3, { error: 'Debe tener al menos 3 caracteres' })
        .max(150, { error: 'No puede superar los 150 caracteres' }),
      'cf-turnstile-response': z.string().optional(),
    }),
    handler: async (
      { name, email, subject, message, 'cf-turnstile-response': turnstileToken },
      context,
    ) => {
      const isHuman = await verifyTurnstileToken(
        turnstileToken ?? '',
        env.TURNSTILE_SECRET_KEY,
        context.request.headers.get('CF-Connecting-IP'),
      )

      if (!isHuman) {
        throw new ActionError({
          code: 'FORBIDDEN',
          message: 'No se pudo verificar que seas una persona. Intentá de nuevo.',
        })
      }

      const { error } = await resend.emails.send({
        from: 'Portfolio <contacto@send.angelbyte.dev>',
        to: ['roberto.angel96@live.com'],
        subject,
        html: buildContactEmailHtml({ name, email, subject, message }),
        replyTo: email,
      })

      if (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }

      return { success: true }
    },
  }),
}

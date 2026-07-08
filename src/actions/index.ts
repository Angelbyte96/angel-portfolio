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
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
  </head>
  <body style="margin: 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-family: Arial, Helvetica, sans-serif;">
            <tr>
              <td style="background-color: #1a0c34; padding: 20px 24px;">
                <span style="color: #ffffff; font-size: 16px; font-weight: bold;">Nuevo mensaje de contacto</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; color: #171717;">
                  <tr>
                    <td style="padding: 4px 0; color: #525252; width: 80px;">Nombre</td>
                    <td style="padding: 4px 0;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #525252;">Email</td>
                    <td style="padding: 4px 0;">
                      <a href="mailto:${escapeHtml(email)}" style="color: #0f766e; text-decoration: none;">${escapeHtml(email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #525252;">Asunto</td>
                    <td style="padding: 4px 0;">${escapeHtml(subject)}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px; padding: 16px; background-color: #f1f5f9; border-radius: 6px; font-size: 14px; line-height: 1.5; color: #171717; white-space: pre-wrap;">${escapeHtml(message)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
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
        to: ['hola@angelbyte.dev'],
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

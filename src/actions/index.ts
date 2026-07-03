import { z } from 'astro/zod'
import { ActionError, defineAction } from 'astro:actions'
import { env } from 'cloudflare:workers'
import { Resend } from 'resend'

import { verifyTurnstileToken } from '../lib/turnstile'

const resend = new Resend(env.RESEND_API_KEY)

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
        html: `<p><strong>${name}</strong> (${email}) escribió:</p><p>${message}</p>`,
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

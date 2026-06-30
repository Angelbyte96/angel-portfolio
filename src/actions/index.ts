import { z } from 'astro/zod'
import { ActionError, defineAction } from 'astro:actions'
import { env } from 'cloudflare:workers'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(3).max(45),
      email: z.email().min(3).max(30),
      subject: z.string().min(3).max(30),
      message: z.string().min(3).max(150),
    }),
    handler: async ({ name, email, subject, message }) => {
      const { error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['roberto.angel96@live.com'],
        subject,
        html: `<p><strong>${name}</strong> (${email}) escribió:</p><p>${message}</p>`,
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

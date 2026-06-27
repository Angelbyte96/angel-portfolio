export const prerender = false
import type { APIContext } from 'astro'

interface ContactBody {
  name: string
  email: string
  message: string
}

export const POST = async ({ request }: APIContext) => {
  const body = (await request.json()) as ContactBody
  const name = body.name
  const email = body.email
  const message = body.message

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

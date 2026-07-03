const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteIp?: string | null,
): Promise<boolean> {
  const body = new FormData()
  body.append('secret', secretKey)
  body.append('response', token)
  if (remoteIp) body.append('remoteip', remoteIp)

  const response = await fetch(SITEVERIFY_URL, { method: 'POST', body })
  const outcome = await response.json<{
    success: boolean
    'error-codes'?: string[]
  }>()

  if (!outcome.success) {
    console.error('Turnstile siteverify rejected the token:', outcome['error-codes'])
  }

  return outcome.success
}

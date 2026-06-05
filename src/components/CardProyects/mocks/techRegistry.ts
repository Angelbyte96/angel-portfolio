interface TechMeta {
  id: string
  monochrome?: boolean
}

export const techRegistry: Record<string, TechMeta> = {
  html:         { id: 'html' },
  css:          { id: 'css' },
  js:           { id: 'js' },
  javascript:   { id: 'js' },
  ts:           { id: 'typescript' },
  typescript:   { id: 'typescript' },
  react:        { id: 'react' },
  astro:        { id: 'astro' },
  nextjs:       { id: 'nextjs',     monochrome: true },
  tailwind:     { id: 'tailwind' },
  tailwindcss:  { id: 'tailwind' },
  nodejs:       { id: 'nodejs' },
  express:      { id: 'express',    monochrome: true },
  expressjs:    { id: 'express',    monochrome: true },
  mysql:        { id: 'mysql' },
  figma:        { id: 'figma' },
  python:       { id: 'python' },
  git:          { id: 'git' },
  github:       { id: 'github',     monochrome: true },
  turso:        { id: 'turso' },
  clerk:        { id: 'clerk' },
  upstash:      { id: 'upstash' },
  drizzle:      { id: 'drizzleorm', monochrome: true },
  drizzleorm:   { id: 'drizzleorm', monochrome: true },
  'c#':         { id: 'csharp' },
  csharp:       { id: 'csharp' },
  npm:          { id: 'npm' },
  pnpm:         { id: 'pnpm' },
}

export function normalizeTag(tag: string): string {
  return tag.toLowerCase().replace(/[\s.\-]/g, '')
}

export function resolveTag(tag: string): TechMeta | null {
  return techRegistry[normalizeTag(tag)] ?? null
}

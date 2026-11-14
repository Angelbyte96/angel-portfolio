import { defineConfig, envField, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://angelbyte.dev',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-plus-jakarta',
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  env: {
    schema: {
      CV_URL: envField.string({ context: 'server', access: 'public' }),
    },
  },
})

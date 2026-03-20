import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const allProyects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/allProyects' }),
	schema: z.object({
		title: z.string(),
		img: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		imgSize: z.string(),
		styleBody: z.string(),
		url: z.string()
	})
})

export const collections = { allProyects }

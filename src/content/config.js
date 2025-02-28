import { z, defineCollection } from 'astro:content'
// z -> zod schema

const allProyects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		img: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		imgSize: z.string(),
		styleBody: z.string(),
		url: z.string(),
	})
})

export const collections = { allProyects }

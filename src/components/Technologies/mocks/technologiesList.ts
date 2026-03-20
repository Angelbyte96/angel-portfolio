interface Technology {
	name: string
	icon: string
}

interface TechnologiesList {
	frontEnd: Technology[]
	backEnd: Technology[]
	learning: Technology[]
	tools: Technology[]
}

export const technologiesList: TechnologiesList = {
	frontEnd: [
		{
			name: 'HTML',
			icon: 'html'
		},
		{
			name: 'CSS',
			icon: 'css'
		},
		{
			name: 'JavaScript',
			icon: 'js'
		},
		{
			name: 'TypeScript',
			icon: 'typescript'
		},
		{
			name: 'Tailwind',
			icon: 'tailwind'
		}
	],
	backEnd: [
		{
			name: 'MySQL',
			icon: 'mysql'
		}
	],
	learning: [
		{
			name: 'React',
			icon: 'react'
		},
		{
			name: 'C#',
			icon: 'csharp'
		},
		{
			name: 'Astro',
			icon: 'astro'
		},
		{
			name: 'NextJS',
			icon: 'nextjs'
		},
		{
			name: 'NodeJS',
			icon: 'nodejs'
		},
		{
			name: 'ExpressJS',
			icon: 'express'
		},
		{
			name: 'Figma',
			icon: 'figma'
		},
		{
			name: 'Python',
			icon: 'python'
		}
	],
	tools: [
		{
			name: 'Git',
			icon: 'git'
		},
		{
			name: 'GitHub',
			icon: 'github'
		},
		{
			name: 'VS',
			icon: 'Vs'
		},
		{
			name: 'VSC',
			icon: 'vsc'
		},
		{
			name: 'Npm',
			icon: 'npm'
		},
		{
			name: 'Pnpm',
			icon: 'pnpm'
		}
	]
}

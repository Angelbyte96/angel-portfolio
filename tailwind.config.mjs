import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '374px'
			},
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(to right top, #0e031b, #150828, #1a0c34, #200c41, #290a4e)',
				'button-gradient':
					'linear-gradient(to right top, #c0c0c0, #484848, #3c3c3c, #2e2e2e, #242424, #151515, #000000)',
				'element-list':
					'linear-gradient(to top, #113263, #123c74, #104786, #0c5298, #005daa)'
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.900'),
						a: {
							color: theme('colors.blue.600'),
							'&:hover': {
								color: theme('colors.blue.800')
							}
						},
						'ol > li::before': {
							color: theme('colors.gray.500')
						},
						'ul > li::before': {
							backgroundColor: theme('colors.gray.600')
						},
						main: {
							width: '100%'
						}
					}
				},
				invert: {
					css: {
						color: theme('colors.gray.100'),
						a: {
							color: theme('colors.blue.300'),
							'&:hover': {
								color: theme('colors.blue.400')
							}
						},
						'ol > li::before': {
							color: theme('colors.gray.400')
						},
						'ul > li::before': {
							backgroundColor: theme('colors.gray.500')
						},
						'ul > li::marker': {
							color: theme('colors.gray.300'),
						},
					}
				}
			})
		}
	},
	plugins: [typography]
}

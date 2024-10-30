/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(to right top, #0e031b, #150828, #1a0c34, #200c41, #290a4e)',
				'button-gradient':
					'linear-gradient(to right top, #c0c0c0, #484848, #3c3c3c, #2e2e2e, #242424, #151515, #000000)'
			}
		}
	},
	plugins: []
}

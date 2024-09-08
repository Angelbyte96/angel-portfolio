import comingSoon from './assets/comingSoon.webp';

const proyects = {
	proyectsTotals: [
		{
			id: crypto.randomUUID(),
			title: 'Proyect 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
			img: `${comingSoon}`,
			list: ['HTML', 'CSS', 'JavaScript']
		},
		{
			id: crypto.randomUUID(),
			title: 'Proyect 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
			img: `${comingSoon}`,
			list: ['NodeJs', 'TypeScript']
		}
	]
};

export { proyects };

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
      icon: 'html',
    },
    {
      name: 'CSS',
      icon: 'css',
    },
    {
      name: 'JavaScript',
      icon: 'js',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
    },
    {
      name: 'Tailwind',
      icon: 'tailwind',
    },
    {
      name: 'React',
      icon: 'react',
    },
    {
      name: 'Astro',
      icon: 'astro',
    },
  ],
  backEnd: [
    {
      name: 'MySQL',
      icon: 'mysql',
    },
    {
      name: 'NodeJS',
      icon: 'nodejs',
    }
  ],
  learning: [
    {
      name: 'ExpressJS',
      icon: 'express',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: 'git',
    },
    {
      name: 'GitHub',
      icon: 'github',
    },
    {
      name: 'VS',
      icon: 'Vs',
    },
    {
      name: 'VSC',
      icon: 'vsc',
    },
    {
      name: 'Npm',
      icon: 'npm',
    },
    {
      name: 'Pnpm',
      icon: 'pnpm',
    },
  ],
}

import type { TechNode } from '@app-types';

export const techNodes: TechNode[] = [
  // Orbit 1 — Frontend
  { name: 'TypeScript', category: 'frontend', orbit: 1, icon: 'typescript' },
  { name: 'React', category: 'frontend', orbit: 1, icon: 'react' },
  { name: 'React Native', category: 'frontend', orbit: 1, icon: 'react' },
  { name: 'Next.js', category: 'frontend', orbit: 1, icon: 'nextjs' },
  { name: 'Astro', category: 'frontend', orbit: 1, icon: 'astro' },

  // Orbit 2 — Backend & Database
  { name: 'Node.js', category: 'backend', orbit: 2, icon: 'nodejs' },
  { name: 'NestJS', category: 'backend', orbit: 2, icon: 'nestjs' },
  { name: 'Fastify', category: 'backend', orbit: 2, icon: 'fastify' },
  { name: 'PostgreSQL', category: 'database', orbit: 2, icon: 'postgresql' },
  { name: 'MySQL', category: 'database', orbit: 2, icon: 'mysql' },

  // Orbit 3 — DevOps, Mobile, Architecture
  { name: 'Docker', category: 'devops', orbit: 3, icon: 'docker' },
  { name: 'GitHub Actions', category: 'devops', orbit: 3, icon: 'github' },
  { name: 'Linux', category: 'devops', orbit: 3, icon: 'linux' },
  { name: 'Expo', category: 'mobile', orbit: 3, icon: 'expo' },
  { name: 'Electron', category: 'mobile', orbit: 3, icon: 'electron' },
];

export const techDomains = [
  {
    key: 'frontend',
    techs: ['TypeScript', 'React', 'React Native', 'Next.js', 'Astro', 'Tailwind CSS'],
  },
  {
    key: 'backend',
    techs: ['Node.js', 'NestJS', 'Fastify', 'REST API Design'],
  },
  {
    key: 'database',
    techs: ['PostgreSQL', 'MySQL'],
  },
  {
    key: 'devops',
    techs: ['Docker', 'GitHub Actions', 'Bitrise', 'Ubuntu', 'AWS'],
  },
  {
    key: 'mobile',
    techs: ['React Native', 'Expo', 'Electron'],
  },
  {
    key: 'architecture',
    techs: ['Clean Architecture', 'SOLID', 'CI/CD'],
  },
] as const;

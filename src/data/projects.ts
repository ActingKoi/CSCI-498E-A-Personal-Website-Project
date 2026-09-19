// To add a project, add one object to this array. Nothing else changes.
export interface Project {
  title: string
  description: string
  tech: string[]     // shown as small tags
  link?: string      // live demo, if any
  repo?: string      // source code, if any
  image?: string     // file in public/images/, e.g. 'my-project.png'
  imageAlt?: string  // required if image is set (describe what it shows)
}

export const projects: Project[] = [
  {
    title: 'Project Name (TODO)',
    description: 'TODO: one or two sentences on what it does and what you built.',
    tech: ['TypeScript', 'React'],
    repo: 'https://github.com/ActingKoi',
  },
]

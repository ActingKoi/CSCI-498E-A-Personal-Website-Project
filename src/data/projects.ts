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
    title: 'Hungry',
    description:
      'An Android restaurant discovery app with Tinder-style swipe cards, an interactive custom map with GPS-mapped restaurant pins, and Firebase-backed accounts and friend lists.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    // TODO: add repo: 'https://github.com/ActingKoi/...' when you have the link
  },
  {
    title: 'Personal Finance Tracker',
    description:
      'A Python app that pulls transactions from the Plaid API, stores them persistently, and summarizes spending by category, merchant, and time period with pandas and matplotlib.',
    tech: ['Python', 'Plaid API', 'Pandas', 'Matplotlib'],
    // TODO: add repo link
  },
]

import type { ComponentType } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Hobbies from './sections/Hobbies'
import Music from './sections/Music'
import Food from './sections/Food'
import Resume from './sections/Resume'

// SECTION REGISTRY: the single list that drives both the sidebar nav and the
// page body. To add a section, add one entry here. Nothing else changes.
export interface SectionDef {
  id: string                 // used for the #anchor and scroll tracking
  title: string              // shown in the nav and as the section heading
  Component: ComponentType   // what to render as the section's body
}

export const sections: SectionDef[] = [
  { id: 'about',    title: 'About',    Component: About },
  { id: 'projects', title: 'Projects', Component: Projects },
  { id: 'skills',   title: 'Skills',   Component: Skills },
  { id: 'hobbies',  title: 'Hobbies',  Component: Hobbies },
  { id: 'music',    title: 'Music',    Component: Music },
  { id: 'food',     title: 'Food',     Component: Food },
  { id: 'resume',   title: 'Resume',   Component: Resume },
]

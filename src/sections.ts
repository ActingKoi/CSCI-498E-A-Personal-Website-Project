import type { ComponentType } from 'react'
import Placeholder from './components/Placeholder'

// SECTION REGISTRY: the single list that drives both the sidebar nav and the
// page body. To add a section, add one entry here. Nothing else changes.
export interface SectionDef {
  id: string                 // used for the #anchor and scroll tracking
  title: string              // shown in the nav and as the section heading
  Component: ComponentType   // what to render as the section's body
}

export const sections: SectionDef[] = [
  { id: 'about',    title: 'About',    Component: Placeholder },
  { id: 'projects', title: 'Projects', Component: Placeholder },
  { id: 'skills',   title: 'Skills',   Component: Placeholder },
  { id: 'hobbies',  title: 'Hobbies',  Component: Placeholder },
  { id: 'music',    title: 'Music',    Component: Placeholder },
  { id: 'food',     title: 'Food',     Component: Placeholder },
  { id: 'resume',   title: 'Resume',   Component: Placeholder },
]

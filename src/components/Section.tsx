import type { ReactNode } from 'react'

// Reusable wrapper: every section gets the same anchor id, heading and
// spacing, so individual sections only supply their body.
interface Props {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">{title}</h2>
      {children}
    </section>
  )
}

import { useEffect, useRef } from 'react'
import type { SectionDef } from '../sections'
import { profile } from '../data/profile'
import Avatar from './Avatar'

// Left column: photo and name, short intro, section nav, and outside links.
// `active` is the section id to highlight (from useActiveSection).
interface Props {
  sections: SectionDef[]
  active: string
}

export default function Sidebar({ sections, active }: Props) {
  const listRef = useRef<HTMLUListElement>(null)

  // On phones the nav is a sideways-scrolling bar. Keep the active link
  // centered in it. We scroll the list itself (not scrollIntoView) so the
  // page never jumps.
  useEffect(() => {
    const list = listRef.current
    const link = list?.querySelector<HTMLElement>('[aria-current="true"]')
    if (!list || !link) return
    list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  return (
    <header className="sidebar">
      <div>
        <div className="identity">
          <Avatar name={profile.name} photos={profile.photos} />
          <h1>{profile.name}</h1>
        </div>
        <p className="tagline">{profile.tagline}</p>
        <p className="blurb">{profile.blurb}</p>
        <nav className="nav" aria-label="Sections">
          <ul ref={listRef}>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="links">
        {profile.links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>
    </header>
  )
}

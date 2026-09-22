import { useEffect, useRef } from 'react'
import type { SectionDef } from '../sections'
import { profile } from '../data/profile'
import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

// Left column: photo and name, link buttons, and the section nav.
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
          {/* First and last name always stack, regardless of width. */}
          <h1>{profile.name.split(' ').map((part, i) => (i === 0 ? part : <>
            <br />{part}
          </>))}</h1>
        </div>
        <SocialLinks links={profile.links} />
        <nav className="nav" aria-label="Sections">
          <ul ref={listRef}>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
                  {s.navLabel ?? s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

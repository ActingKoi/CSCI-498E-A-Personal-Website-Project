import type { SectionDef } from '../sections'

// Left column: name, short intro, section nav, and outside links.
// `active` is the section id to highlight (from useActiveSection).
interface Props {
  sections: SectionDef[]
  active: string
}

export default function Sidebar({ sections, active }: Props) {
  return (
    <header className="sidebar">
      <div>
        <h1>Daniel Hoang</h1>
        <p className="tagline">Computer science student and food enthusiast</p>
        <p className="blurb">
          Senior at Colorado School of Mines. I love trying new food and reading.
        </p>
        <nav className="nav" aria-label="Sections">
          <ul>
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
        <a href="https://github.com/ActingKoi">GitHub</a>
        {/* TODO: add LinkedIn / email links */}
      </div>
    </header>
  )
}

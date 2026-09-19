import './styles/theme.css'
import './styles/global.css'
import './styles/sections.css'
import { sections } from './sections'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import { useActiveSection } from './hooks/useActiveSection'

// Top level: sidebar on the left, one <Section> per registry entry on the right.
const ids = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(ids)

  return (
    <div className="layout">
      <Sidebar sections={sections} active={active} />
      <main className="content">
        {sections.map(({ id, title, Component }) => (
          <Section key={id} id={id} title={title}>
            <Component />
          </Section>
        ))}
      </main>
    </div>
  )
}

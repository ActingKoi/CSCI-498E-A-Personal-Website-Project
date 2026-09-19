import Card from '../components/Card'
import { projects } from '../data/projects'

// A stack of cards, one per entry in data/projects.ts.
export default function Projects() {
  return (
    <div className="stack">
      {projects.map((p) => (
        <Card key={p.title} title={p.title} href={p.link ?? p.repo} image={p.image} imageAlt={p.imageAlt}>
          <p>{p.description}</p>
          <ul className="tags">
            {p.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  )
}

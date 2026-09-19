import Card from '../components/Card'
import { hobbies } from '../data/hobbies'

export default function Hobbies() {
  return (
    <div className="tiles">
      {hobbies.map((h) => (
        <Card key={h.title} title={h.title} image={h.image} imageAlt={h.imageAlt} imagePosition={h.imagePosition}>
          {h.description && <p>{h.description}</p>}
        </Card>
      ))}
    </div>
  )
}

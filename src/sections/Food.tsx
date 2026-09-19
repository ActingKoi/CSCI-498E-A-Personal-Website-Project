import Card from '../components/Card'
import { food } from '../data/food'

export default function Food() {
  return (
    <div className="stack">
      {food.map((f) => (
        <Card key={f.name} title={f.name} image={f.image} imageAlt={f.imageAlt}>
          {f.place && <p className="muted">{f.place}</p>}
          {f.note && <p>{f.note}</p>}
        </Card>
      ))}
    </div>
  )
}

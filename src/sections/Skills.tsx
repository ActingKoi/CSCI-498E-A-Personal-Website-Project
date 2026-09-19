import { skills } from '../data/skills'

// One labelled group of tags per category.
export default function Skills() {
  return (
    <>
      {skills.map((group) => (
        <div key={group.category} className="skill-group">
          <h3 className="label">{group.category}</h3>
          <ul className="tags">
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </>
  )
}

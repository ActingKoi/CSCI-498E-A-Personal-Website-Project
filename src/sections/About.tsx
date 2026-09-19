import { profile } from '../data/profile'

// One paragraph per string in profile.about.
export default function About() {
  return (
    <>
      {profile.about.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  )
}

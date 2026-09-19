import { resume } from '../data/resume'
import { publicUrl } from '../assets'

// Inline education and experience, plus a download button when a PDF is set.
export default function Resume() {
  return (
    <>
      {resume.pdf && (
        <p><a className="button" href={publicUrl(resume.pdf)}>Download PDF</a></p>
      )}

      <h3 className="label">Education</h3>
      {resume.education.map((e) => (
        <p key={e.school}>
          <strong>{e.school}</strong> · {e.detail}
          <br /><span className="muted">{e.dates}</span>
        </p>
      ))}

      <h3 className="label">Experience</h3>
      {resume.experience.map((x) => (
        <div key={`${x.org}-${x.role}`}>
          <p>
            <strong>{x.role}</strong> · {x.org}
            <br /><span className="muted">{x.dates}</span>
          </p>
          <ul>{x.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
      ))}
    </>
  )
}

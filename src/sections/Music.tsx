import { music } from '../data/music'

// A plain list: title (linked if a link exists), artist, and a note.
export default function Music() {
  return (
    <ul className="list">
      {music.map((t) => (
        <li key={`${t.artist}-${t.title}`}>
          <strong>{t.link ? <a href={t.link}>{t.title}</a> : t.title}</strong>
          <span className="muted"> · {t.artist}</span>
          {t.note && <p className="muted">{t.note}</p>}
        </li>
      ))}
    </ul>
  )
}

import { music } from '../data/music'

// One row per song: album cover (when Spotify data exists), title linking to
// Spotify, artist, and an optional note.
export default function Music() {
  return (
    <ul className="list">
      {music.map((t) => (
        <li key={`${t.artist}-${t.title}`} className="track">
          {/* Decorative: the title next to it already names the song. */}
          {t.cover && <img className="track__cover" src={t.cover} alt="" loading="lazy" />}
          <div>
            <strong><a href={t.link}>{t.title}</a></strong>
            <span className="muted"> · {t.artist}</span>
            {t.note && <p className="muted">{t.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}

import list from './music.json'
import spotify from './spotify.generated.json'

// Your favorite songs live in music.json (edit that file to add or remove
// songs). `npm run spotify` looks each one up on Spotify and saves the
// public results (link and cover art) to spotify.generated.json. This file
// merges the two. Songs Spotify hasn't matched fall back to a search link.
export interface Track {
  title: string
  artist: string
  note?: string     // optional: why it matters to you (add "note" in music.json)
  link: string
  cover?: string
}

// Must match the key format used in scripts/fetch-spotify.mjs.
const keyOf = (title: string, artist: string) => `${artist} - ${title}`

const found = spotify as Record<string, { url: string; cover?: string }>

export const music: Track[] = (list as { title: string; artist: string; note?: string }[]).map((t) => {
  const match = found[keyOf(t.title, t.artist)]
  return {
    ...t,
    link: match?.url ?? `https://open.spotify.com/search/${encodeURIComponent(`${t.title} ${t.artist}`)}`,
    cover: match?.cover,
  }
})

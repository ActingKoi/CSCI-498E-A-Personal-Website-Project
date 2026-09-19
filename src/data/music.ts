// A simple list of favorites. link is optional (Spotify, YouTube, ...).
export interface Track {
  title: string
  artist: string
  note?: string   // why it matters to you
  link?: string
}

// Builds a Spotify search link for a song. Swap in a direct track URL
// (open.spotify.com/track/...) later if you want to skip the search step.
const spotify = (title: string, artist: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`

export const music: Track[] = [
  { title: 'Folded', artist: 'Kehlani', link: spotify('Folded', 'Kehlani') },
  { title: 'Roxanne', artist: 'Arizona', link: spotify('Roxanne', 'Arizona') },
  { title: 'Blueberry Faygo', artist: 'Lil Mosey', link: spotify('Blueberry Faygo', 'Lil Mosey') },
  { title: 'Shelter', artist: 'Porter Robinson', link: spotify('Shelter', 'Porter Robinson') },
  { title: 'Miniskirt', artist: 'AOA', link: spotify('Miniskirt', 'AOA') },
]

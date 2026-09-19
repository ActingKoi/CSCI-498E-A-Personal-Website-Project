// A simple list of favorites. link is optional (Spotify, YouTube, ...).
export interface Track {
  title: string
  artist: string
  note?: string   // why it matters to you
  link?: string
}

export const music: Track[] = [
  { title: 'TODO: song or album', artist: 'TODO: artist', note: 'TODO: why you like it' },
]

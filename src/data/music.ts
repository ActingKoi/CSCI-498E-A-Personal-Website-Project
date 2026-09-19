// A simple list of favorites. link is optional (Spotify, YouTube, ...).
export interface Track {
  title: string
  artist: string
  note?: string   // why it matters to you
  link?: string
}

export const music: Track[] = [
  { title: 'Folded', artist: 'Kehlani' },
  { title: 'Roxanne', artist: 'Arizona' },
  { title: 'Blueberry Faygo', artist: 'Lil Mosey' },
  { title: 'Shelter', artist: 'Porter Robinson' },
  { title: 'Miniskirt', artist: 'AOA' },
]

// Reads the Spotify share links in src/data/music.json and saves each song's
// album cover to src/data/spotify.generated.json.
//
// Run it on your own computer:  npm run spotify
//
// It uses Spotify's public "oEmbed" endpoint, which needs NO API key or
// account: you give it a track link, it returns the cover image. Nothing
// secret is involved, so there is nothing to protect or leak.

import { readFileSync, writeFileSync } from 'node:fs'

async function main() {
  const songs = JSON.parse(readFileSync('src/data/music.json', 'utf8'))
  const results = {}

  for (const { title, artist, url } of songs) {
    if (!url) {
      console.warn(`Skipped (no "url" in music.json): ${title} - ${artist}`)
      continue
    }
    const res = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`)
    if (!res.ok) {
      console.warn(`Failed (HTTP ${res.status}): ${title} - ${artist}. Is the link a track link?`)
      continue
    }
    const data = await res.json()
    // Same key format as keyOf() in src/data/music.ts.
    results[`${artist} - ${title}`] = { url, cover: data.thumbnail_url }
    console.log(`OK: ${title} - ${artist}`)
  }

  writeFileSync('src/data/spotify.generated.json', JSON.stringify(results, null, 2) + '\n')
  console.log(`Saved ${Object.keys(results).length} of ${songs.length} songs.`)
}

main()

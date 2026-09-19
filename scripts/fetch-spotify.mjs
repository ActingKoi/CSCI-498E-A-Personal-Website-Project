// Looks up every song in src/data/music.json on Spotify and saves the PUBLIC
// results (track link + album cover) to src/data/spotify.generated.json.
//
// Run it on your own computer:  npm run spotify
//
// WHY A SCRIPT AND NOT CODE IN THE WEBSITE: this site is static files that
// anyone can download and read. Any API key placed in the site's code would be
// visible to every visitor. This script runs only on your machine, reads the
// secret from a local .env file (which .gitignore keeps out of GitHub), and
// writes out only non-secret data. The secret never reaches the website.

import { readFileSync, writeFileSync } from 'node:fs'

// Wrapped in a function so a failure can `return` and exit normally.
async function main() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    console.error(
      'Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET.\n' +
        'Copy .env.example to .env, fill in both values, and run again.',
    )
    process.exitCode = 1
    return
  }

  // Step 1: trade the id + secret for a short-lived access token.
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!tokenRes.ok) {
    console.error(`Spotify rejected the credentials (HTTP ${tokenRes.status}). Check your .env values.`)
    process.exitCode = 1
    return
  }
  const { access_token: token } = await tokenRes.json()

  // Step 2: search for each song and keep the first match.
  const songs = JSON.parse(readFileSync('src/data/music.json', 'utf8'))
  const results = {}

  for (const { title, artist } of songs) {
    const q = encodeURIComponent(`track:${title} artist:${artist}`)
    const res = await fetch(`https://api.spotify.com/v1/search?q=${q}&type=track&limit=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const item = res.ok ? (await res.json()).tracks?.items?.[0] : undefined
    if (!item) {
      console.warn(`No match: ${title} - ${artist} (HTTP ${res.status})`)
      continue
    }
    // Same key format as keyOf() in src/data/music.ts.
    results[`${artist} - ${title}`] = {
      url: item.external_urls.spotify,
      cover: (item.album.images[1] ?? item.album.images[0])?.url,
    }
    console.log(`Matched: ${title} - ${artist}`)
  }

  writeFileSync('src/data/spotify.generated.json', JSON.stringify(results, null, 2) + '\n')
  console.log(`Saved ${Object.keys(results).length} of ${songs.length} songs.`)
}

main()

# Daniel Hoang - Personal Website

**Live site: [https://actingkoi.github.io/CSCI-498E-A-Personal-Website-Project/](https://actingkoi.github.io/CSCI-498E-A-Personal-Website-Project/)**

A single-page portfolio built with React, Vite and TypeScript, deployed to GitHub Pages by GitHub Actions. (CSCI 498E Project 1; the original assignment brief is in the course template repo.)

## Run it locally

```bash
npm install
npm run dev      # live preview at http://localhost:5173/CSCI-498E-A-Personal-Website-Project/
npm run build    # type-check + production build into dist/
```

## How it is organized

```
src/
  sections.ts        the section list: drives both the sidebar nav and the page body
  data/              ALL your content (edit these files to change the site)
  sections/          one component per section; they only render data
  components/        reusable pieces: Card, Section, Sidebar, Avatar
  styles/theme.css   every color and font (re-skin the site here)
  styles/*.css       layout and component styles
public/              files copied as-is: resume.pdf and images/
scripts/             helper scripts run on your computer (Spotify covers, live check)
```

## Common edits

| I want to... | Edit |
| --- | --- |
| Change name, intro, links | `src/data/profile.ts` |
| Add a project | add an object to `src/data/projects.ts` |
| Add a skill | `src/data/skills.ts` |
| Add a hobby / food | `src/data/hobbies.ts` / `src/data/food.ts` |
| Add a song | `src/data/music.json` (with its Spotify link), then `npm run spotify` |
| Update the resume | replace `public/resume.pdf`; edit `src/data/resume.ts` |
| Change colors | `src/styles/theme.css` |
| Add a whole new section (blog, etc.) | write a component in `src/sections/`, add one line to `src/sections.ts` |

## Images

Put image files in the matching folder, then reference them by path inside `public/images/`:

| Folder | Used by | Example in the data file |
| --- | --- | --- |
| `public/images/profile/` | avatar (click to cycle) | `photos: [{ src: 'profile/me1.jpg', alt: '...' }]` in `profile.ts` |
| `public/images/hobbies/` | hobby cards | `image: 'hobbies/gym.jpg'` in `hobbies.ts` |
| `public/images/food/` | food cards | `image: 'food/sushi.jpg'` in `food.ts` |
| `public/images/projects/` | project cards | `image: 'projects/hungry.png'` in `projects.ts` |

Tips: keep each file under about 500 kB (resize big phone photos first), and always write `alt` text for the profile photos. Card photos are decorative because the card title names the subject.

## Spotify (album covers and links)

Each song links to Spotify and shows its album cover. No API key or account is needed: the script uses Spotify's public oEmbed endpoint.

1. In Spotify, open a song, then Share > Copy link (it looks like `https://open.spotify.com/track/...`).
2. Paste it into that song's `"url"` in `src/data/music.json`.
3. Run `npm run spotify`. It saves the cover art to `src/data/spotify.generated.json`.
4. Commit and push both files.

Songs without a `"url"` still link to a Spotify search.

## Deploying

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it. This needs repo Settings > Pages > Source set to **GitHub Actions**. The `base` in `vite.config.ts` must match the repo name, or the page deploys but loads unstyled.

`npm run verify` fetches the live site and checks the page, its CSS/JS, and the resume all load. It writes the result to `verification/fetch.txt`.

// Checks the LIVE site (not localhost) and writes the evidence to
// verification/fetch.txt. Run after a deploy:  npm run verify
//
// This check can fail for real reasons: a 404 page, a missing <title>, or a
// CSS/JS file that 404s (the classic "deployed but unstyled" bug from a wrong
// base path). Exit code 1 means at least one check failed.

import { writeFileSync } from 'node:fs'

const URL_ = 'https://actingkoi.github.io/CSCI-498E-A-Personal-Website-Project/'
const lines = [`GET ${URL_}`, `When: ${new Date().toISOString()}`, '']
let failed = false

function record(ok, message) {
  if (!ok) failed = true
  lines.push(`${ok ? 'PASS' : 'FAIL'}  ${message}`)
}

const page = await fetch(URL_)
const html = await page.text()
record(page.status === 200, `page returned HTTP ${page.status}`)
record(html.includes('<title>Daniel Hoang</title>'), 'page <title> is "Daniel Hoang"')

// Every script/stylesheet the page references must load.
const assets = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)].map((m) => m[1])
record(assets.length > 0, `page references ${assets.length} JS/CSS asset(s)`)
for (const path of assets) {
  const res = await fetch(new URL(path, URL_))
  record(res.status === 200, `${path} returned HTTP ${res.status}`)
}

const resume = await fetch(new URL('resume.pdf', URL_))
record(resume.status === 200, `resume.pdf returned HTTP ${resume.status}`)

lines.push('', '--- response body ---', html)
writeFileSync('verification/fetch.txt', lines.join('\n'))
console.log(lines.filter((l) => /^(PASS|FAIL)/.test(l)).join('\n'))
process.exit(failed ? 1 : 0)

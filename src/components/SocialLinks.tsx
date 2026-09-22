import type { ReactNode } from 'react'

// Round icon buttons (GitHub, LinkedIn, Resume...) with a tooltip that pops
// up on hover or keyboard focus. Each icon is a small inline SVG so we don't
// need an icon library. To add a new icon, add an entry to `icons` and use
// its name in `links` in data/profile.ts.
export type IconName = 'github' | 'linkedin' | 'resume' | 'email'

export interface SocialLink {
  label: string    // shown in the tooltip and read aloud by screen readers
  href: string
  icon: IconName
}

// Brand logos are filled shapes; the resume/email icons are drawn as outlines.
const icons: Record<IconName, ReactNode> = {
  github: (
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.600.2 2.800.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.600A12 12 0 0 0 12 .3" fill="currentColor" />
  ),
  linkedin: (
    <path d="M20.400 20.500h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.900 3.400-1.900 3.600 0 4.300 2.400 4.300 5.500zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100m1.800 13.100H3.600V9h3.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.800 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0" fill="currentColor" />
  ),
  resume: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </g>
  ),
  email: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </g>
  ),
}

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <ul className="social" aria-label="Links">
      {links.map((l) => (
        <li key={l.label}>
          <a className="social__link" href={l.href} aria-label={l.label} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">{icons[l.icon]}</svg>
            {/* Visual tooltip only: the link's aria-label already names it. */}
            <span className="social__tip" aria-hidden="true">{l.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

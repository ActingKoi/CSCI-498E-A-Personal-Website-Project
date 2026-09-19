import type { ReactNode } from 'react'
import { imageUrl } from '../assets'

// Reusable card used by Projects, Hobbies and Food: optional image, a
// title (optionally a link), and any body content passed as children.
interface Props {
  title: string
  href?: string        // makes the title a link
  image?: string       // filename in public/images/
  imageAlt?: string    // describe the image; use '' only if purely decorative
  children?: ReactNode
}

export default function Card({ title, href, image, imageAlt = '', children }: Props) {
  return (
    <article className="card">
      {image && <img className="card__image" src={imageUrl(image)} alt={imageAlt} loading="lazy" />}
      <div className="card__body">
        <h3 className="card__title">
          {href ? <a href={href}>{title}</a> : title}
        </h3>
        {children}
      </div>
    </article>
  )
}

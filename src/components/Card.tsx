import type { ReactNode } from 'react'
import { imageUrl } from '../assets'

// Reusable card used by Projects, Hobbies and Food.
// With an image, the photo fills the card behind a dark gradient (see
// .card--has-image in sections.css) so the text stays readable on top of it.
interface Props {
  title: string
  href?: string        // makes the title a link
  image?: string       // path inside public/images/, e.g. 'hobbies/gym.jpg'
  imageAlt?: string    // describe the image; leave empty if purely decorative
  imagePosition?: string // which part of the photo stays in view, e.g. 'center top'
  children?: ReactNode
}

export default function Card({ title, href, image, imageAlt = '', imagePosition, children }: Props) {
  return (
    <article className={image ? 'card card--has-image' : 'card'}>
      {image && <img className="card__image" src={imageUrl(image)} alt={imageAlt}
          style={imagePosition ? { objectPosition: imagePosition } : undefined} loading="lazy" />}
      <div className="card__body">
        <h3 className="card__title">
          {href ? <a href={href}>{title}</a> : title}
        </h3>
        {children}
      </div>
    </article>
  )
}

import { useState } from 'react'
import { imageUrl } from '../assets'

// Profile picture beside your name. Clicking it cycles through the photos
// listed in data/profile.ts. A bobbing "click me" hint shows until the first
// click. With no photos it shows your initials instead.
export interface Photo {
  src: string   // path inside public/images/, e.g. 'profile/me1.jpg'
  alt: string   // describe the photo for screen readers
}

interface Props {
  name: string
  photos: Photo[]
}

export default function Avatar({ name, photos }: Props) {
  const [index, setIndex] = useState(0)
  const [hasClicked, setHasClicked] = useState(false)

  // No photos yet: show initials so the layout still looks right.
  if (photos.length === 0) {
    const initials = name.split(' ').map((w) => w[0]).join('')
    return <div className="avatar avatar--initials" aria-hidden="true">{initials}</div>
  }

  const photo = photos[index]
  const canCycle = photos.length > 1

  function next() {
    setIndex((i) => (i + 1) % photos.length) // wraps back to the first photo
    setHasClicked(true)
  }

  return (
    <div className="avatar">
      <button
        type="button"
        className="avatar__button"
        onClick={next}
        disabled={!canCycle}
        aria-label={`${name}: photo ${index + 1} of ${photos.length}. Activate to see the next photo.`}
      >
        <img src={imageUrl(photo.src)} alt={photo.alt} />
      </button>
      {canCycle && !hasClicked && <span className="avatar__hint" aria-hidden="true">click me</span>}
    </div>
  )
}

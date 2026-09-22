import { useRef, useState } from 'react'
import { imageUrl } from '../assets'

// Profile photo beside your name: a square card that tilts toward the mouse
// (desktop only — touch and reduced-motion just get a flat card) and cycles
// through your photos on click. A bobbing "click me" hint shows until the
// first click. With no photos it shows your initials instead.
export interface Photo {
  src: string   // path inside public/images/, e.g. 'profile/me1.jpg'
  alt: string   // describe the photo for screen readers
}

interface Props {
  name: string
  photos: Photo[]
}

// How far the card tilts, in degrees. Small values look subtle; the ref
// avoids re-rendering React on every mouse-move.
const MAX_TILT = 10

export default function Avatar({ name, photos }: Props) {
  const [index, setIndex] = useState(0)
  const [hasClicked, setHasClicked] = useState(false)
  const cardRef = useRef<HTMLButtonElement>(null)

  function handleMove(e: React.PointerEvent) {
    if (e.pointerType !== 'mouse') return // no tilt on touch/stylus
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--rx', `${(px * MAX_TILT * 2).toFixed(2)}deg`)
    card.style.setProperty('--ry', `${(-py * MAX_TILT * 2).toFixed(2)}deg`)
  }

  function resetTilt() {
    cardRef.current?.style.setProperty('--rx', '0deg')
    cardRef.current?.style.setProperty('--ry', '0deg')
  }

  // No photos yet: show initials so the layout still looks right.
  if (photos.length === 0) {
    const initials = name.split(' ').map((w) => w[0]).join('')
    return <div className="avatar-tilt avatar-tilt--initials" aria-hidden="true">{initials}</div>
  }

  const photo = photos[index]
  const canCycle = photos.length > 1

  function next() {
    setIndex((i) => (i + 1) % photos.length) // wraps back to the first photo
    setHasClicked(true)
  }

  return (
    <div className="avatar">
      <div className="avatar-glow" aria-hidden="true" />
      <button
        ref={cardRef}
        type="button"
        className="avatar-tilt"
        onClick={next}
        onPointerMove={handleMove}
        onPointerLeave={resetTilt}
        disabled={!canCycle}
        aria-label={`${photo.alt}. Photo ${index + 1} of ${photos.length}. Activate to see the next photo.`}
      >
        {/* The button's label already describes the photo, so the image is decorative. */}
        <img src={imageUrl(photo.src)} alt="" />
      </button>
      {canCycle && !hasClicked && <span className="avatar__hint" aria-hidden="true">click me</span>}
    </div>
  )
}

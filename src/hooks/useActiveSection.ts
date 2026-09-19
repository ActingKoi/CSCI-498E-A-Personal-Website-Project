import { useEffect, useState } from 'react'

// Scroll-spy: returns the id of the section currently near the top of the
// screen, so the sidebar can highlight it. Uses IntersectionObserver, which
// tells us when an element enters a band near the top of the viewport
// without listening to every scroll event.
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // Only the band 20%-40% down the screen counts as "current".
      { rootMargin: '-20% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

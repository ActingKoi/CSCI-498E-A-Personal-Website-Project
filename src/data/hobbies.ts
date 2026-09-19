// description, image and imageAlt are optional; put image files in public/images/hobbies/ and set image: 'hobbies/gym.jpg'.
export interface Hobby {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  imagePosition?: string   // e.g. 'center top' to keep faces in frame
}

// Order matters: the 1st and 4th tiles span the full width (see .tiles in
// sections.css), so put your sharpest, widest photos in those slots.
export const hobbies: Hobby[] = [
  { title: 'Snowboarding', image: 'hobbies/snowboarding.jpg' },
  { title: 'Reading', image: 'hobbies/reading.jpg' },
  { title: 'Video games', image: 'hobbies/video_games.jpg' },
  { title: 'Gym', image: 'hobbies/gym.jpg' },
]

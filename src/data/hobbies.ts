// description, image and imageAlt are optional; put image files in public/images/.
export interface Hobby {
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export const hobbies: Hobby[] = [
  { title: 'Reading' },
  { title: 'Gym' },
  { title: 'Snowboarding' },
  { title: 'Video games' },
]

// description, image and imageAlt are optional; put image files in public/images/hobbies/ and set image: 'hobbies/gym.jpg'.
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

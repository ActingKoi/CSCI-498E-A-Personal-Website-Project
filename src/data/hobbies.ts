// description, image and imageAlt are optional; put image files in public/images/hobbies/ and set image: 'hobbies/gym.jpg'.
export interface Hobby {
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export const hobbies: Hobby[] = [
  { title: 'Reading', image: 'hobbies/reading.jpg' },
  { title: 'Gym', image: 'hobbies/gym.jpg' },
  { title: 'Snowboarding', image: 'hobbies/snowboarding.jpg' },
  { title: 'Video games', image: 'hobbies/video_games.jpg' },
]

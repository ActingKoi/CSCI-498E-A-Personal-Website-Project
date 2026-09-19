// image/imageAlt are optional; put image files in public/images/.
export interface Hobby {
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export const hobbies: Hobby[] = [
  { title: 'Reading', description: 'TODO: what you read and why you like it.' },
  { title: 'Cooking and eating', description: 'TODO: a line about your food hobby.' },
]

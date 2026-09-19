// Favorite dishes and places. place/note/image are optional.
export interface FoodItem {
  name: string
  place?: string
  note?: string
  image?: string
  imageAlt?: string
}

export const food: FoodItem[] = [
  { name: 'TODO: a favorite dish', place: 'TODO: where', note: 'TODO: why it is great' },
]

// Favorite dishes and places. place/note/image are optional.
// Put photos in public/images/food/ and set image: 'food/sushi.jpg'.
export interface FoodItem {
  name: string
  place?: string
  note?: string
  image?: string
  imageAlt?: string
}

export const food: FoodItem[] = [
  { name: 'Sushi' },
  { name: 'KBBQ' },
  { name: 'Seafood boil' },
]

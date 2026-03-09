// types.ts
export interface GroceryTableUser {
  id: string
  name: string
  role?: { name: string }
  groceryId: string
}

export interface GroceryLight {
  id: string
  name: string
  contact: string
  location: string
  status: string
  createdAt: Date,
  updatedAt: Date,
  users: GroceryTableUser[]
  products: { id: string; name: string; price: number }[]
}
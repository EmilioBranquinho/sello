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

export interface Category {
    id: string,
    name:string
}

export interface Product {
  id: string,
  name: string,
  price: number,
  category: {
    id: string,
    name: string
  }
  minimumStock: number,
  inStock: number,
  createdAt: Date; 
  updatedAt: Date
}
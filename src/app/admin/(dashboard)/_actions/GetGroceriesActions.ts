import { prisma } from "@/lib/prisma"

export interface GroceryProps {
    id: string,
    name: string,
    contact: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
}

export async function getGroceries() {
  try {
    const groceries: GroceryProps[] = await prisma.grocery.findMany({
        include: {
            products: true,
            users: true,
            sales: true
        }
    });

    return groceries
  } catch (error) {
    throw new Error('Failed to fetch groceries')
  }
}
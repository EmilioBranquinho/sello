'use server'

import { prisma } from "@/lib/prisma"
import { auth } from "../../../../../auth"

export async function GetTodayStaffSoldProductsCount() {
  const now = new Date()
  const session = await auth()

  const groceryId = session?.user.groceryId;

  const startOfDayUTC = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    0, 0, 0
  ))

  const endOfDayUTC = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    23, 59, 59, 999
  ))

  return await prisma.salesItem.count({
    where: {
    sale: {
        groceryId: groceryId
    },
      createdAt: {
        gte: startOfDayUTC,
        lte: endOfDayUTC,
      },  
    },
    
  })
}
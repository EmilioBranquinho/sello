import { prisma } from "@/lib/prisma"

export async function getUsers() {
  try {
    const users: any[] = await prisma.users.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        role: true
      }
    })

    console.log(users)

    return users
  } catch (error) {
    throw new Error('Failed to fetch users')
  }
}
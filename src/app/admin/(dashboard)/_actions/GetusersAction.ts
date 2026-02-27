import { prisma } from "@/lib/prisma"

interface User {
    id: string,
    name: string,
    email: string,
    role: {
        id: string,
        name: string
    }
}

export async function getUsers() {
  try {
    const users: User[] = await prisma.users.findMany({
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
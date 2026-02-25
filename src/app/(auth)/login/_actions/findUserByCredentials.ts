'use server'

import { prisma } from "@/lib/prisma"
import { compareSync } from "bcrypt";

interface UserCredentialsProps {
    email: string,
    password: string
}

interface User {
    id: string,
    name: string,
    email: string
}

export async function findUserByCredentials({ email, password }: UserCredentialsProps): Promise<User | null>{

    const user = await prisma.users.findFirst({
        where: {
            email: email
        },
    })

    if(!user){
        return null;
    }

    const passwordMatch = await compareSync(password, user.password)

    if(!passwordMatch){
        return null;
    }

    const userData: User = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    return user;
}
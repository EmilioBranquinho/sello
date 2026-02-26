'use server'

import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"
import z from "zod";

const CreateUserSchema = z.object({
  email: z.string({ message: "Email é obrigatório" }).trim().min(1, "Email é obrigatório").email("Email inválido"),
  name: z.string({ message: "O nome é obrigatório" }).min(3, "O nome precisa conter no mínimo 3 caracteres").max(50, "O nome pode conter no máximo 50 caracteres"),
  password: z.string({ message: "Senha é obrigatória" }).min(4, "A senha deve ter no mínimo 4 caracteres"),
  role: z.string()
});


type CreateUserSchema = z.infer<typeof CreateUserSchema>

export async function CreateUserAction(_prevState: any, formData: FormData) {

    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        role: formData.get('role') as string,
    }

    const parsed = CreateUserSchema.safeParse(data)
    
    if (!parsed.success) {
      return {
        message: parsed.error.issues.map((err) => err.message).join(", "),
        success: false
      }
    }

    const existingUser = await prisma.users.findUnique({
      where: {
        email: parsed.data.email,
      },
    })

    if(existingUser){
      return {
        message: "O usuário com este email já existe",
        success: false
      }
    }

  
  if (!data.name || !data.email || !data.password) {
    throw new Error('Name, email and password are required')
  }

  const hashedPassword = await hash(parsed.data.password, 8)
  
  try {
    const user = await prisma.users.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        password: hashedPassword,
        roleId: parsed.data.role //{
        //     connect: {
        //         name: 'STAFF'
        //     }
        // },
      },
      include: {
        role: true
      }
    })

    console.log('User created:', user)

    return {
      message: "Usuário criado com sucesso",
      success: true
    }
    
  } catch (error) {
    console.log(error);
      return {
      message: "Erro ao criar usuário, tente novamente mais tarde",
      success: false
    }
  }
}
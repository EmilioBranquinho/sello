'use server'

import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"
import z from "zod";

const CreateUserSchema = z.object({
  name: z.string({ message: "O nome é obrigatório" }).min(3, "O nome precisa conter no mínimo 3 caracteres").max(50, "O nome pode conter no máximo 50 caracteres"),
  location: z.string({ message: "Localização é obrigatória" }).min(2, "A localização deve conter no mínimo 2 caracteres").max(100, "A localização pode conter no máximo 100 caracteres"),
  contact: z.string({ message: "Contato é obrigatório" }).min(1, "Contato é obrigatório")
});


type CreateUserSchema = z.infer<typeof CreateUserSchema>

export async function CreateGroceryAction(_prevState: any, formData: FormData) {

    const data = {
        name: formData.get('name') as string,
        location: formData.get('location') as string,
        contact: formData.get('contact') as string
    }

    const parsed = CreateUserSchema.safeParse(data)
    
    if (!parsed.success) {
      return {
        message: parsed.error.issues.map((err) => err.message).join(", "),
        success: false
      }
    }

    const existingGrocery = await prisma.grocery.findUnique({
      where: {
        name: parsed.data.name,
      },
    })

    if(existingGrocery){
      return {
        message: "O estabelecimento com este nome já existe",
        success: false
      }
    }

  
  if (!data.name || !data.location || !data.contact) {
    throw new Error('Name, location and contact are required')
  }

  
  try {
    const grocery = await prisma.grocery.create({
      data: {
        name: parsed.data.name,
        location: parsed.data.location,
        contact: parsed.data.contact,
        status: "ACTIVE"
      },
      include: {
        users: true,
        products: true,
        sales: true
      }
    })

    console.log('Grocery created:', grocery)

    return {
      message: "Estabelecimento criado com sucesso",
      success: true
    }
    
  } catch (error) {
    console.log(error);
      return {
      message: "Erro ao criar estabelecimento, tente novamente mais tarde",
      success: false
    }
  }
}
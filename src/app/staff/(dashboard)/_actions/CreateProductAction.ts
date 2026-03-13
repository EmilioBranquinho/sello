'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import z from "zod";
import { auth } from "../../../../../auth";

const CreateProductSchema = z.object({
  name: z.string({ message: "O nome é obrigatório" }).min(3, "O nome precisa conter no mínimo 3 caracteres").max(50, "O nome pode conter no máximo 50 caracteres"),
  price: z.number({ message: "o preço é obrigatório" }).max(100, "o preço pode conter no máximo 6 dígitos"),
  minimumStock: z.number({ message: "O estoque mínimo é obrigatório"}),
  categoryId: z.string()
});


type CreateProductSchema = z.infer<typeof CreateProductSchema>

export async function CreateProductAction(_prevState: any, formData: FormData) {

    const session = await auth();

    const groceryId = session?.user.groceryId as string;

    const data = {
        name: formData.get('name') as string,
        price: formData.get('price'),
        minimumStock: formData.get('minimumStock'),
        categoryId: formData.get('categoryId') as string
    }

    const parsed = CreateProductSchema.safeParse(data)
    
    if (!parsed.success) {
      return {
        message: parsed.error.issues.map((err) => err.message).join(", "),
        success: false
      }
    }

    const existingProduct = await prisma.product.findFirst({
        where: {
            name: parsed.data.name
        }
    })

    if(existingProduct){
      return {
        message: "Já existe  um produto com este nome!",
        success: false
      }
    }

  
  if (!data.name || !data.price || !data.minimumStock) {
    throw new Error('Name, price and minimumStock are required')
  }
  
  try {
    const Product = await prisma.product.create({
      data: {
        name: parsed.data.name,
        price: parsed.data.price,
        minimumStock: parsed.data.minimumStock,
        categoryId: parsed.data.categoryId,
        groceryId: groceryId,
        inStock: 0
      },
    })

    revalidatePath('/staff/products');

    return {
      message: "produto criado com sucesso",
      success: true
    }
    
  } catch (error) {
    console.log(error);
      return {
      message: "Erro ao criar produto, tente novamente mais tarde",
      success: false
    }
  }
}
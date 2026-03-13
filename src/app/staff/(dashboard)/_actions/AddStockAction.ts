'use server'

import { prisma } from "@/lib/prisma"

export async function AddStockAction(_prevState: any, formData: FormData){

    const quantity = Number(formData.get('quantity'))
    const productId = formData.get('productId') as string

    try{
        const product = await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                inStock: {
                    increment: quantity
                }
            }  
        })
    } catch (error) {
        console.log(error)
    }


    return {
      message: "Stock atualizado com sucesso",
      success: true
    }
}
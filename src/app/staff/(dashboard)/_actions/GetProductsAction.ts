'use server'

import { prisma } from "@/lib/prisma"
import { Product } from "@/types/types";

export async function GetProducts(){

    const products: Product[] = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            minimumStock: true,
            inStock: true,
            createdAt: true,
            updatedAt: true,
            
            category: {
                select: {
                    id: true,
                    name: true
                }
            },
            grocery: {
                select: {
                    id: true,
                    name: true
                }
            } 
        }
    });

    return products;
}


'use server'

import { prisma } from "@/lib/prisma"
import { Category } from "@/types/types";

export async function GetCategories(){

    const categories: Category[] = await prisma.category.findMany();

    return categories;
}
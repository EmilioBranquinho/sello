"use client"

import { Badge } from "../../../../components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Product } from "@/types/types"


interface ProductsTableProps {
  products: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {

const [localProducts, setLocalProducts] = useState(products || [])

function handleStatusChange(id: string, status: string) {
  setLocalProducts(prev =>
    prev.map(g => g.id === id ? { ...g, status } : g)
  )
}

useEffect(() => {
  setLocalProducts(products)
}, [products])

//  const staffByGrocery = products.map(product => ({
//   groceryName: product.name,
//   staffNames: product.users
//     .filter(user => user.role?.name === "STAFF")
//     .map(user => user.name)
// }));

//  const ownerByGrocery = products.map(product => ({
//   groceryName: product.name,
//   ownerNames: product.users
//     .filter(user => user.role?.name === "OWNER")
//     .map(user => user.name)
// }));

  return (
    <Table className="mt-10">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20%]">Nome do produto</TableHead>
          <TableHead className="w-[20%]">Preço</TableHead>
          <TableHead className="w-[20%]">Categoria</TableHead>
          <TableHead className="w-[20%]">Disponível em estoque</TableHead>
          <TableHead className="w-[20%]">Estoque mínimo</TableHead>
          <TableHead className="w-[16%] text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {localProducts.map((product) => (
          <TableRow key={product.id} className="hover:bg-muted/50">
            <TableCell className="font-medium">
              <div>
                <p className="font-semibold">{product.name}</p>
              </div>
            </TableCell>
            <TableCell className="font-medium">
              {product.price}
            </TableCell>
            <TableCell>
              {product.category.name} 
            </TableCell>
            <TableCell>
              {product.inStock} 
            </TableCell>
            <TableCell>
              {product.minimumStock} 
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-blue-100"
                >
                  <Edit className="h-4 w-4 text-blue-600" />
                </Button>
            {/* <div
              >
                {product.status === "ACTIVE" ?  (
                  <DisableGroceryForm  onSuccess={status => handleStatusChange(product.id, status)} groceryId={product.id} />
                  ): (
                    <EnableGroceryForm  onSuccess={status => handleStatusChange(product.id, status)} groceryId={product.id}/> 
                  )}
              </div> */}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

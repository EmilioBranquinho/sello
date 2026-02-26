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

export interface Grocery {
  id: string
  name: string
  address: string
  city: string
  phone: string
  manager: string
  status: "Ativo" | "Inativo"
  products: number
}

interface GroceriesTableProps {
  groceries: Grocery[]
}

export function GroceriesTable({ groceries }: GroceriesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20%]">Nome</TableHead>
          <TableHead className="w-[15%]">Gerente</TableHead>
          <TableHead className="w-[15%]">Cidade</TableHead>
          <TableHead className="w-[12%]">Telefone</TableHead>
          <TableHead className="w-[10%]">Produtos</TableHead>
          <TableHead className="w-[12%]">Status</TableHead>
          <TableHead className="w-[16%] text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groceries.map((grocery) => (
          <TableRow key={grocery.id} className="hover:bg-muted/50">
            <TableCell className="font-medium">
              <div>
                <p className="font-semibold">{grocery.name}</p>
                <p className="text-sm text-muted-foreground">{grocery.address}</p>
              </div>
            </TableCell>
            <TableCell>{grocery.manager}</TableCell>
            <TableCell>{grocery.city}</TableCell>
            <TableCell className="text-sm">{grocery.phone}</TableCell>
            <TableCell className="text-center font-semibold">{grocery.products}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  grocery.status === "Ativo"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }
              >
                {grocery.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-blue-100"
                >
                  <Edit className="h-4 w-4 text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

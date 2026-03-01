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

interface Grocery {
    id: string,
    name: string,
    contact: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
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
          <TableHead className="w-[15%]">Status</TableHead>
          {/* <TableHead className="w-[15%]">Cidade</TableHead>
          <TableHead className="w-[12%]">Telefone</TableHead>
          <TableHead className="w-[10%]">Produtos</TableHead>
          <TableHead className="w-[12%]">Status</TableHead> */}
          <TableHead className="w-[16%] text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groceries.map((grocery) => (
          <TableRow key={grocery.id} className="hover:bg-muted/50">
            <TableCell className="font-medium">
              <div>
                <p className="font-semibold">{grocery.name}</p>
                <p className="text-sm text-muted-foreground">{grocery.contact}</p>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  grocery.status === "ACTIVE"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }
              >
                {grocery.status}
              </Badge>
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-none"
                >
            <Badge
                variant="outline"
                className={"bg-red-50 text-red-700"}
              >
                <span>Desativar</span>
              </Badge>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

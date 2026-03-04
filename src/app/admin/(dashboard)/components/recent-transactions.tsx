'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserCog } from "lucide-react"
import Link from "next/link"
import { SaleProps } from "../_actions/GetSalesAction"
import { useState } from "react"

interface RecentSalesProps {
  recentSales: SaleProps[]
}

export function RecentTransactions({ recentSales }: RecentSalesProps ) {

  const[sales, setSales] = useState(recentSales || []);

  return (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendedor</TableHead>
                  <TableHead>Loja</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSales.map((recentSales) => (
                  <TableRow key={recentSales.id}>
                    <TableCell className="font-medium">{recentSales.user.name}</TableCell>
                    <TableCell>{recentSales.grocery.name}</TableCell>
                    <TableCell>{recentSales.items[1].product.name}</TableCell>
                    <TableCell>{recentSales.createdAt.getUTCHours()}</TableCell>
                    <TableCell className="text-green-600">
                      {recentSales.items[0].subtotal} Mzn
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
  )
}

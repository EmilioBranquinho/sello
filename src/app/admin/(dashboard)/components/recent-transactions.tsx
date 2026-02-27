import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserCog } from "lucide-react"
import Link from "next/link"

export function RecentTransactions() {
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
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.name}</TableCell>
                    <TableCell>{transaction.tenant}</TableCell>
                    <TableCell>{transaction.product}</TableCell>
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell className="text-green-600">
                      {transaction.amount} Mzn
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
  )
}

const transactions = [
  {
    id: "1",
    name: "Celso Lopes",
    amount: 250,
    tenant: "Mercearia Mano Celso",
    time: "18:07",
    product: "Oleo Sandrop 3 litros"
  },
  {
    id: "2",
    name: "Tatiana Silva",
    amount: 25,
    tenant: "Taty Lanches",
    time: "18:00",
    product: "Coca cola garrafa 250ml"
  },
  {
    id: "3",
    name: "Nelson Roberto",
    amount: 75,
    tenant: "Mercearia do Nelson",
    time: "17:58",
    product: "Leite Fresco 500ml"
  },
  {
    id: "4",
    name: "Daniel Fernando",
    amount: 420,
    tenant: "Mercearia Daniel",
    time: "17:55",
    product: "Arroz 10 kg"
  },
  {
    id: "5",
    name: "Paulo Antonio",
    amount: 10,
    tenant: "Mercearia Paulo",
    time: "17:43",
    product: "Saldo Vodacom"
  },
]


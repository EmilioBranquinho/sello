import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { File, Plus, Search } from "lucide-react"
import { CreateGroceryDialog } from "./create-grocery-dialog"
import { GroceriesTable } from "./groceries-table"

export const metadata = {
  title: "Gerenciar Mercearias",
  description: "Sistema de gerenciamento de mercearias",
}

export default function GroceriesPage() {
  const groceries = [
    {
      id: "1",
      name: "Mercado Central",
      address: "Rua Principal, 123",
      city: "São Paulo",
      phone: "(11) 3333-1111",
      manager: "João Silva",
      status: "Ativo",
      products: 450,
    },
    {
      id: "2",
      name: "Mercadinho do Bairro",
      address: "Av. Secundária, 456",
      city: "São Paulo",
      phone: "(11) 3333-2222",
      manager: "Maria Santos",
      status: "Ativo",
      products: 320,
    },
    {
      id: "3",
      name: "Mercado Popular",
      address: "Rua das Flores, 789",
      city: "Rio de Janeiro",
      phone: "(21) 3333-3333",
      manager: "Carlos Oliveira",
      status: "Ativo",
      products: 380,
    },
    {
      id: "4",
      name: "Supermercado XX",
      address: "Av. Principal, 1000",
      city: "Belo Horizonte",
      phone: "(31) 3333-4444",
      manager: "Ana Costa",
      status: "Inativo",
      products: 0,
    },
    {
      id: "5",
      name: "Mercearia Tradicional",
      address: "Rua Velha, 321",
      city: "Porto Alegre",
      phone: "(51) 3333-5555",
      manager: "Pedro Alves",
      status: "Ativo",
      products: 275,
    },
  ]

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Mercearias</h1>
          <p className="text-muted-foreground">Gerencie todas as mercearias</p>
        </div>
        <CreateGroceryDialog />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Pesquisar mercearias..." className="h-9" />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700" variant="outline" size="sm">
                Exportar em PDF <File className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <div className="w-full min-w-[640px]">
            <GroceriesTable groceries={groceries} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

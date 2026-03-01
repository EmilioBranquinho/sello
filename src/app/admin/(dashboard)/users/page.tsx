import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { File, Search, UserCog } from "lucide-react"
import { CreateUserDialog } from "./create-user-dialog"
import { User, UsersTable } from "./users-table"
import { getUsers } from "../_actions/GetusersAction"
import { GetUsersRoles } from "../_actions/GetUsersRoleAction"
import { getGroceries } from "../_actions/GetGroceriesActions"

export default async function UsersPage() {

 const users = await getUsers();
 const roles = await GetUsersRoles();
 const groceries = await getGroceries();

 console.log(roles)
 console.log(groceries)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Usuários</h1>
          <p className="text-muted-foreground">Gerencie os usuários</p>
        </div>
        <CreateUserDialog roles={roles} groceries={groceries} />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Pesquisar usuários..." className="h-9" />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" variant="outline" size="sm">
                Exportar em PDF <File/>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <div className="w-full min-w-[640px]">
            <UsersTable users={users}/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const users = [
  {
    id: "1",
    name: "Thabo",
    surname: "Mbeki",
    email: "thabo.mbeki@example.com",
    idType: "ID",
    phone: "+27 71 234 5678",
    status: "Active",
  },
  {
    id: "2",
    name: "Nomzamo",
    surname: "Mbatha",
    email: "nomzamo.mbatha@example.com",
    idType: "Passport",
    phone: "+27 82 345 6789",
    status: "Active",
  },
  {
    id: "3",
    name: "Siya",
    surname: "Kolisi",
    email: "siya.kolisi@example.com",
    idType: "ID",
    phone: "+27 63 456 7890",
    status: "Active",
  },
  {
    id: "4",
    name: "Bonang",
    surname: "Matheba",
    email: "bonang.matheba@example.com",
    idType: "ID",
    phone: "+27 74 567 8901",
    status: "Pending",
  },
  {
    id: "5",
    name: "Trevor",
    surname: "Noah",
    email: "trevor.noah@example.com",
    idType: "Passport",
    phone: "+27 85 678 9012",
    status: "Active",
  },
  {
    id: "6",
    name: "Patrice",
    surname: "Motsepe",
    email: "patrice.motsepe@example.com",
    idType: "ID",
    phone: "+27 76 789 0123",
    status: "Active",
  },
  {
    id: "7",
    name: "Caster",
    surname: "Semenya",
    email: "caster.semenya@example.com",
    idType: "ID",
    phone: "+27 87 890 1234",
    status: "Pending",
  },
  {
    id: "8",
    name: "Elon",
    surname: "Musk",
    email: "elon.musk@example.com",
    idType: "Asylum Seeker",
    phone: "+27 78 901 2345",
    status: "Active",
  },
]


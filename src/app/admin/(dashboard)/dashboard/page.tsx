import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersIcon, Store, DollarSign ,WalletIcon, UserPlusIcon, UserXIcon } from "lucide-react"
import { DashboardChart } from "@/app/admin/(dashboard)/components/dashboard-chart"
import { RecentTransactions } from "@/app/admin/(dashboard)/components/recent-transactions"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard do administrador</h1>
        <p className="text-muted-foreground">Estatistícas e performance da aplicação.</p>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        {/* <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="daily">Hoje</TabsTrigger>
            <TabsTrigger value="weekly">7d</TabsTrigger>
            <TabsTrigger value="monthly">30d</TabsTrigger>
          </TabsList>
        </div> */}

        <TabsContent value="daily" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de mercearias</CardTitle>
                <Store color="gray" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+12% from yesterday</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de usuários</CardTitle>
                <UsersIcon color="blue" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">+2.5% from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
                <WalletIcon color="purple" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R 12,543</div>
                <p className="text-xs text-muted-foreground">+18% from yesterday</p>
              </CardContent>
            </Card>

            <Card className="bg-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita total de hoje</CardTitle>
                <DollarSign color="green" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">33,435 Mzn</div>
                <p className="text-xs text-muted-foreground">-4% from yesterday</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

      </Tabs>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Visão geral das receitas</CardTitle>
            <CardDescription>Volume das receitas ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Vendas recentes</CardTitle>
            <CardDescription>Últimas vendas na plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersIcon, Store, DollarSign ,WalletIcon, UserPlusIcon, UserXIcon } from "lucide-react"
import { DashboardChart } from "@/app/admin/(dashboard)/components/dashboard-chart"
import { RecentTransactions } from "@/app/admin/(dashboard)/components/recent-transactions"
import { DashboardResumeCards } from "./dashboard-resume-cards"
import { getUsers } from "../_actions/GetusersAction"
import { getGroceries } from "../_actions/GetGroceriesActions"
import { GetTodaySalesCount } from "../_actions/GetTodaylSalesCount"
import { GetTodayRevenue } from "../_actions/GetTodayRevenue"
import { GetTodaySales } from "../_actions/GetTodaySalesAction"
import { GetRevenueByMonth } from "../_actions/GetRevenueByMonth"


export default async function DashboardPage() {

  const users = await getUsers();
  const groceries = await getGroceries();
  const todaySalesCount = await GetTodaySalesCount();
  const todayRevenue = await GetTodayRevenue();
  const recentSales = await GetTodaySales();
  const revenuesByMonth = await GetRevenueByMonth();

  const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
]

const formatted = revenuesByMonth.map((item) => ({
  name: months[item.month - 1],
  total: Number(item.total)
}))

  const usersCount = users.length;
  const groceriesCount = groceries?.length;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard do administrador</h1>
        <p className="text-muted-foreground">Estatistícas e performance da aplicação📊🚀</p>
      </div>

      <DashboardResumeCards 
      usersCount={usersCount} 
      groceriesCount={groceriesCount} 
      todaySalesCount={todaySalesCount}
      todayRevenue={todayRevenue}
      />

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Visão geral das receitas</CardTitle>
            <CardDescription>Volume das receitas ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardChart data={formatted} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Vendas recentes</CardTitle>
            <CardDescription>Últimas vendas na plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions recentSales={recentSales} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


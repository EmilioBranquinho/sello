import { StaffResumeCards } from "../components/staff-resume-cards"
import { GetTodayStaffSalesCount } from "../_actions/GetTodayStaffSalesCount"
import { GetTodaySatffRevenue } from "../_actions/GetTodayStaffRevenue"
import { GetTodayStaffSoldProductsCount } from "../_actions/GetTodaySoldProducts"

export default async function SatffDashboardPage() {

  const todaySalesCount = await GetTodayStaffSalesCount();
  const todayRevenue = await GetTodaySatffRevenue();
  const todaySoldProducts = await GetTodayStaffSoldProductsCount();

  const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
]

// const formatted = revenuesByMonth.map((item) => ({
//   name: months[item.month - 1],
//   total: Number(item.total)
// }))

//   const usersCount = users.length;
//   const groceriesCount = groceries.length;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Painel do Gerente de vendas</h1>
        <p className="text-muted-foreground">Estatistícas e movimentos em tempo real.</p>
      </div>

      <StaffResumeCards
      todaySoldProducts={todaySoldProducts}
      todaySalesCount={todaySalesCount}
      todayRevenue={todayRevenue}
      />
{/* 
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
      </div> */}
    </div>
  )
}


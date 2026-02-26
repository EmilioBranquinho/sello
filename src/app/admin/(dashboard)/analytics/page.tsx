'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Sample data
const topProductsData = [
  { name: 'Arroz', sales: 4200, revenue: 12600 },
  { name: 'Feijão', sales: 3800, revenue: 11400 },
  { name: 'Óleo', sales: 3200, revenue: 9600 },
  { name: 'Leite', sales: 2900, revenue: 8700 },
  { name: 'Pão', sales: 2400, revenue: 7200 },
]

const bottomProductsData = [
  { name: 'Caviar', sales: 45, revenue: 450 },
  { name: 'Mel', sales: 89, revenue: 445 },
  { name: 'Gengibre', sales: 123, revenue: 369 },
  { name: 'Açúcar', sales: 234, revenue: 702 },
  { name: 'Sal', sales: 256, revenue: 512 },
]

const topSellersData = [
  { name: 'João Silva', sales: 2400, products: 45 },
  { name: 'Maria Santos', sales: 2210, products: 38 },
  { name: 'Pedro Costa', sales: 2029, products: 41 },
  { name: 'Ana Oliveira', sales: 1980, products: 35 },
  { name: 'Carlos Ferreira', sales: 1891, products: 32 },
]

const trendData = [
  { date: '1 Jan', sales: 4000, revenue: 12000, customers: 240 },
  { date: '4 Jan', sales: 3000, revenue: 9000, customers: 221 },
  { date: '7 Jan', sales: 2000, revenue: 6000, customers: 229 },
  { date: '10 Jan', sales: 2780, revenue: 8340, customers: 200 },
  { date: '13 Jan', sales: 1890, revenue: 5670, customers: 218 },
  { date: '16 Jan', sales: 2390, revenue: 7170, customers: 250 },
  { date: '19 Jan', sales: 3490, revenue: 10470, customers: 210 },
]

const productCategoryData = [
  { name: 'Grãos', value: 35, color: '#3b82f6' },
  { name: 'Laticínios', value: 25, color: '#8b5cf6' },
  { name: 'Bebidas', value: 20, color: '#ec4899' },
  { name: 'Congelados', value: 12, color: '#f59e0b' },
  { name: 'Outros', value: 8, color: '#10b981' },
]

export default function AnalyticsPage() {
  const [timeFilter, setTimeFilter] = useState('7days')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Analise de desempenho e métricas da mercearia</p>
      </div>

      {/* Time Filter */}
      <div className="flex gap-2">
        <Button 
          variant={timeFilter === 'today' ? 'default' : 'outline'} 
          onClick={() => setTimeFilter('today')}
        >
          Hoje
        </Button>
        <Button 
          variant={timeFilter === '7days' ? 'default' : 'outline'} 
          onClick={() => setTimeFilter('7days')}
        >
          7 Dias
        </Button>
        <Button 
          variant={timeFilter === '30days' ? 'default' : 'outline'} 
          onClick={() => setTimeFilter('30days')}
        >
          30 Dias
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% do mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,420</div>
            <p className="text-xs text-muted-foreground">+8% comparado a semana passada</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 52,840</div>
            <p className="text-xs text-muted-foreground">+15% do período anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 124,50</div>
            <p className="text-xs text-muted-foreground">+5% de aumento</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
            <CardDescription>Top 5 produtos por volume de vendas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProductsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bottom Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Menos Vendidos</CardTitle>
            <CardDescription>Bottom 5 produtos por volume de vendas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bottomProductsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trend Chart */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Tendência de Vendas e Receita</CardTitle>
            <CardDescription>Dados dos últimos 19 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Vendas" />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Receita (R$)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Product Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Categoria</CardTitle>
            <CardDescription>Percentual de vendas por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Sellers */}
        <Card>
          <CardHeader>
            <CardTitle>Melhores Vendedores</CardTitle>
            <CardDescription>Top 5 vendedores por volume</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSellersData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="sales" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Tables */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Most Sold Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Procurados</CardTitle>
            <CardDescription>Análise detalhada dos melhores produtos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProductsData.map((product, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} unidades vendidas</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">R$ {product.revenue.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Sellers Details */}
        <Card>
          <CardHeader>
            <CardTitle>Performance de Vendedores</CardTitle>
            <CardDescription>Estatísticas dos principais vendedores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSellersData.map((seller, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{seller.name}</p>
                    <p className="text-sm text-muted-foreground">{seller.products} produtos vendidos</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">R$ {seller.sales.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

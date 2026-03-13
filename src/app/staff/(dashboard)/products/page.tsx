import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { File, Plus, Search } from "lucide-react"
import { CreateProductDialog } from "./create-product-dialog"
import { GetCategories } from "../_actions/GetCategoriesAction"
import { GetProducts } from "../_actions/GetProductsAction"
import { ProductsClient } from "./products-client"
import { AddStockDialog } from "./add-stock-dialog"
import { auth } from "../../../../../auth"
// import { CreateGroceryDialog } from "./create-grocery-dialog"
// import { GroceriesTable } from "./groceries-table"
// import { getGroceries } from "../_actions/GetGroceriesActions"
// import { GroceriesClient } from "./groceries-client"

export const metadata = {
  title: "Gerenciar produtos",
  description: "Sistema de gerenciamento de mercearias",
}

export default async function Products() {

    const categories = await GetCategories();
    const products = await GetProducts();

    const session = await auth();

    const userGroceryId = session?.user.groceryId;

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground">Gerencie todo o seu estoque de produtos.</p>
        </div>
        <div className="flex gap-4 items-center">
          <AddStockDialog products={products}/>
          <CreateProductDialog  categories={categories}/>
        </div>
      </div>

      <Card>
        {/* <CardHeader className="p-4">
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
        </CardHeader> */}
        <CardContent className="p-0 overflow-auto">
          <div className="w-full min-w-[640px]">
            <ProductsClient 
            products={products}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { Category } from "@/types/types"
import { CreateProductAction } from "../_actions/CreateProductAction"

const initialState = {
  success: false,
  message: '',
}

interface CategoryProps {
    categories: Category[]
}

export function CreateProductDialog({ categories }: CategoryProps ) {

  const [name, setName] = useState("");
  const[price, setPrice] = useState<number>(0);
  const[minimumStock, setMinimumStock] = useState<number>(0);
  const[availableCategories, setAvailableCategories] = useState(categories || []);
  

  const [open, setOpen] = useState(false);
  const [state, FormAction, isPending] = useActionState(CreateProductAction, null);

   useEffect(() => {
    if (state?.success) {
      setOpen(false)       
      setName("") 
      setPrice(0)
      setMinimumStock(0)       
    }

  }, [state?.success])

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
    {state?.success === false && (
      <div className="mb-4 rounded-md bg-red-50 p-4">
        <div className="flex">
          <span className="text-red-500">{state?.message}</span>
        </div>
      </div>
    )}
      <DialogTrigger asChild>
        <Button className="bg-green-600 text-white hover:bg-green-700">
          <UserPlus className="mr-2 h-4 w-4 " />
          Criar produto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Criar um novo produto</DialogTitle>
          <DialogDescription>
            Adicione um novo produto ao sistema.
          </DialogDescription>
        </DialogHeader>
        <form  action={FormAction}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid col-span-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name" 
                placeholder="Ex: Manteiga rama 200g:" 
                required />
              </div>
            </div>
            </div> 
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 col-span-1">
                <Label htmlFor="price">Preço</Label>
                <Input
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required />
              </div>
  
               <div className="flex gap-4 col-span-1">
                <div className="space-y-2">
                  <Label htmlFor="idType">Categoria</Label>
                  <Select name="categoryId" required>
                    <SelectTrigger id="idType">
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCategories?.map((category, index)=>(
                        <SelectItem key={index} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
  
                <div className="space-y-2">
                <Label htmlFor="minimumStock">Estoque mínimo</Label>
                <Input
                  id="minimumStock"
                  name="minimumStock"
                  value={minimumStock}
                  onChange={(e) => setMinimumStock(Number(e.target.value))}
                  required
                />
              </div>
          </div>

          <DialogFooter>
            <Button
            disabled={isPending} 
            type="button" 
            variant="outline"
            onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button 
            className="bg-green-600 text-white hover:bg-green-700" 
            disabled={isPending} 
            type="submit">
              {isPending ? <Spinner color="white"/> : "Criar produto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}


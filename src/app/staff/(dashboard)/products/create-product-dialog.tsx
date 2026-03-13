"use client"

import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { CreateGroceryAction } from "../_actions/CreateGroceryAction" 
import { Plus } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Category } from "@/types/types"
import { CreateProductAction } from "../_actions/CreateProductAction"

interface CategoryProps {
    categories: Category[]
}

export function CreateProductDialog({ categories }: CategoryProps ) {

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    minimumStock: "",
    categoryId: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [state, FormAction, isPending] = useActionState(CreateProductAction, null);

   useEffect(() => {
    if (state?.success) {
      setFormData({
        name: "",
        price: "",
        minimumStock: "",
        categoryId: ""   
      }) 
      setOpen(false)      
    }

  }, [state?.success])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 text-white hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Produto</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para criar um novo produto no sistema
          </DialogDescription>
        </DialogHeader>
        <form action={FormAction}  className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="name">Nome do produto</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ex: Manteiga rama"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 space-y-2">
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                name="price"
                placeholder=""
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minimumStock">Estoque mínimo</Label>
              <Input
                id="minimumStock"
                name="minimumStock"
                placeholder="Ex: 5"
                value={formData.minimumStock}
                onChange={handleChange}
                required
              />
            </div>
             <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="idType">Categoria</Label>
                <Select name="categoryId" required>
                  <SelectTrigger id="idType">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category, index)=>(
                      <SelectItem key={index} value={category.id}>{category.name}</SelectItem>
                    ))}
                    <SelectItem value={"ddd"}>
                        Doces e salgados
                    </SelectItem>
                    <SelectItem value={"dw"}>
                        Temperos
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>  
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
            type="submit" 
            disabled={isPending}
            className="bg-green-600 hover:bg-green-700">
              {isPending ? <Spinner/> : "Cadastrar Produto"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

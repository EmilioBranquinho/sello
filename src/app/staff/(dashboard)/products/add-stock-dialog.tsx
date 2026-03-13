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
import { ArrowBigUp, UserPlus } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { Product } from "@/types/types"
import { AddStockAction } from "../_actions/AddStockAction"

const initialState = {
  success: false,
  message: '',
}

interface ProductProps {
    products: Product[]
}

export function AddStockDialog({ products }: ProductProps ) {

  const[quantity, setQuantity] = useState<number>(0);
  const[availableProducts, setAvailableProducts] = useState(products || [])
  

  const [open, setOpen] = useState(false);
  const [state, FormAction, isPending] = useActionState(AddStockAction, null);

   useEffect(() => {
    if (state?.success) {
      setOpen(false)       
      setQuantity(0)       
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
        <Button 
        className="bg-red-600 text-white hover:bg-white hover:text-red-600 cursor-pointer" 
        variant="outline" 
        size="sm"
        >
          Entrada de estoque
          <ArrowBigUp/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Entrada de estoque</DialogTitle>
          <DialogDescription>
            Atualize o stock de qualquer produto.
          </DialogDescription>
        </DialogHeader>
        <form  action={FormAction}>
            <div className="grid grid-cols-2">
               <div className="flex gap-4 col-span-2">
                <div className="space-y-2">
                  <Label htmlFor="idType">Produto</Label>
                  <Select name="productId" required>
                    <SelectTrigger id="idType">
                      <SelectValue placeholder="Selecione o produto" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableProducts?.map((product, index)=>(
                        <SelectItem key={index} value={product.id}>{product.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
                <div className="space-y-2 col-span-1">
                <Label htmlFor="quantity">Quantidade</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
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
              {isPending ? <Spinner color="white"/> : "Atualizar estoque"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}


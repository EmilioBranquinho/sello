'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash, UserCog } from "lucide-react"
import Link from "next/link"

export interface User {
    id: string,
    name: string,
    email: string,
    role: {
        id: string,
        name: string
    }
}

interface Users {
    users: User[]
}

  export function UsersTable({ users }: Users) {
    return (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-left">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.role.name}
                    </TableCell>
                    <TableCell >
                        <div className="flex gap-2">
                      <Button className="bg-blue-500" >
                        <Edit size={25} suppressHydrationWarning className="h-4 w-4" />
                      </Button>
                       <Button className="bg-red-600">
                        <Trash size={25} suppressHydrationWarning className="h-4 w-4" />
                      </Button>                                        
                        </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    )
  }
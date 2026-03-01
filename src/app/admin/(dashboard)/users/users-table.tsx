'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash, Trash2, UserCog } from "lucide-react"
import Link from "next/link"
import { Grocery } from "../groceries/groceries-table"

export interface User {
    id: string,
    name: string,
    email: string,
    status: string,
    contact: string,
    grocery: {
        id: string,
        name: string
    },
    role: {
        id: string,
        name: string
    },
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
                  <TableHead>Mercearia</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
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
                      {user.grocery.name}
                    </TableCell>
                    <TableCell>
                      {user.contact}
                    </TableCell>
                    <TableCell>
                      {user.role.name}
                    </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-blue-100"
                >
                  <Edit className="h-4 w-4 text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    )
  }
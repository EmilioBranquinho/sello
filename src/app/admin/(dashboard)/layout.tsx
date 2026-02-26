import type React from "react"
import { Sidebar } from "./components/sidebar"
import { Header } from "./components/header"
import { SidebarProvider } from "./components/sidebar-provider"
import { auth } from "../../../../auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();

  if(!session){
    redirect("/");
  }

  if(session.user.role.name !== "ADMIN"){
    redirect("/");
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <div className="lg:pl-72">
          <Header name={session.user?.name || "User"} />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}


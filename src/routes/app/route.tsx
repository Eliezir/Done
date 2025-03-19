import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './-components/sidebar'

export const Route = createFileRoute('/app')({ 
  component: MainLayoutRoute
})

function MainLayoutRoute() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-auto p-6">
          <SidebarTrigger className="mb-4 md:hidden" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
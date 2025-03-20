import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './-components/app-sidebar'

export const Route = createFileRoute('/app')({ 
  component: MainLayoutRoute
})

function MainLayoutRoute() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-wrapper w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto p-6 w-full m-2 mt-3 mb-0 rounded-lg rounded-b-none shadow bg-white">
          <SidebarTrigger className="mb-4 md:hidden" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
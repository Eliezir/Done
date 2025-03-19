import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react'

export const Route = createFileRoute('/app/__layout')({ 
  component: MainLayoutRoute
})

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-muted border-r flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Done</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          asChild
        >
          <Link to="/app/" activeProps={{ className: 'bg-accent text-accent-foreground' }}>
            <Icon icon="lucide:home" className="mr-2" />
            Dashboard
          </Link>
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          asChild
        >
          <Link to="/app/tasks" activeProps={{ className: 'bg-accent text-accent-foreground' }}>
            <Icon icon="lucide:list-todo" className="mr-2" />
            Tasks
          </Link>
        </Button>
      </nav>
      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          asChild
        >
          <Link to="/app/settings" activeProps={{ className: 'bg-accent text-accent-foreground' }}>
            <Icon icon="lucide:settings" className="mr-2" />
            Settings
          </Link>
        </Button>
      </div>
    </aside>
  )
}

function MainLayoutRoute() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
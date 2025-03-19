import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/__layout')({ 
  component: AuthLayoutRoute
})

function AuthLayoutRoute() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-md">
        <Outlet />
      </div>
    </div>
  )
}
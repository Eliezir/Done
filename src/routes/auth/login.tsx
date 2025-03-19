import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/auth/login')({
  component: LoginPage
})

function LoginPage() {
  const navigate = Route.useNavigate()
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col space-y-2">
        <Button onClick={() => navigate({ to: '/app/' })}>Login</Button>
        <Button variant="ghost" onClick={() => navigate({ to: '/auth/register' })}>
          Don't have an account? Register
        </Button>
      </div>
    </div>
  )
}
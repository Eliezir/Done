import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage
})

function RegisterPage() {
  const navigate = Route.useNavigate()
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <div className="flex flex-col space-y-2">
        <Button onClick={() => navigate({ to: '/app/' })}>Register</Button>
        <Button variant="ghost" onClick={() => navigate({ to: '/auth/login' })}>
          Already have an account? Login
        </Button>
      </div>
    </div>
  )
}
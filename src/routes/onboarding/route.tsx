import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding')({ 
  component: OnboardingLayoutRoute
})

function OnboardingLayoutRoute() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center noise-bg z-50 w-full h-screen ">
      <div className="text-center max-w-5xl px-4 relative z-10 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
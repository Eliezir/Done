import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/')({
  component: SettingsPage
})

function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>Home page content here.</p>
    </div>
  )
}
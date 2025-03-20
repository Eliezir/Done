import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { DynamicLogo } from "@/components/dynamic-logo"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInput
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pomodoro",
    url: "#",
    icon: Search,
  },
  {
    title: "Sticky Wall",
    url: "#",
    icon: Settings,
  },
  {
    title: "Upcomming",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="p-0"> 
            <div className="flex items-center justify-between px-2 py-4">
            <DynamicLogo />
            <SidebarTrigger />
            </div>
          <SidebarSeparator className="mx-0" />  
        </SidebarHeader>
        <SidebarGroup>
        {/* <SidebarInput /> */}
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

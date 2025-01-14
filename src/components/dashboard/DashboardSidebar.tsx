import {
  LayoutDashboard,
  Calendar,
  Users,
  Ticket,
  MessageSquare,
  FileText,
  Settings,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/dashboard",
  },
  {
    title: "Event Management",
    icon: Calendar,
    url: "/dashboard/events",
  },
  {
    title: "Stakeholders",
    icon: Users,
    url: "/dashboard/stakeholders",
  },
  {
    title: "Tickets & Revenue",
    icon: Ticket,
    url: "/dashboard/tickets",
  },
  {
    title: "Communication",
    icon: MessageSquare,
    url: "/dashboard/communication",
  },
  {
    title: "Content",
    icon: FileText,
    url: "/dashboard/content",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/dashboard/settings",
  },
]

export function DashboardSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-montserrat">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className="text-gray-700 hover:text-fashionista-red hover:bg-fashionista-pink/10"
                    data-active={location.pathname === item.url}
                    onClick={() => navigate(item.url)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-inter">{item.title}</span>
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
import {
  LayoutDashboard,
  Users,
  Scissors,
  DollarSign,
  Calendar,
  Ticket,
  BarChart,
  FileEdit,
  BookOpen,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { title: "Models", icon: Users, url: "/models" },
  { title: "Designers", icon: Scissors, url: "/designer" },
  { title: "Sponsors", icon: DollarSign, url: "/sponsors" },
  { title: "Schedule", icon: Calendar, url: "/events" },
  { title: "Tickets", icon: Ticket, url: "/tickets" },
  { title: "Analytics", icon: BarChart, url: "/analytics" },
  { title: "Content", icon: FileEdit, url: "/content" },
  { title: "Resources", icon: BookOpen, url: "/resources" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-purple-50 data-[active=true]:bg-purple-600"
                  >
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
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
  );
}
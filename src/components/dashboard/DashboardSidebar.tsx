import { Home, Calendar, Users, DollarSign, MessageSquare, BarChart2, FileText } from "lucide-react";
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
  { title: "Overview", icon: Home, url: "/dashboard" },
  { title: "Events", icon: Calendar, url: "/dashboard/events" },
  { title: "Talent", icon: Users, url: "/dashboard/talent" },
  { title: "Finance", icon: DollarSign, url: "/dashboard/finance" },
  { title: "Communication", icon: MessageSquare, url: "/dashboard/communication" },
  { title: "Analytics", icon: BarChart2, url: "/dashboard/analytics" },
  { title: "Resources", icon: FileText, url: "/dashboard/resources" },
];

export function DashboardSidebar() {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto">
      <Sidebar className="bg-white">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-500">Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url}
                        className="text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="w-5 h-5" />
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
    </div>
  );
}
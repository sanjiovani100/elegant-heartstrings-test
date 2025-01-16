import { Home, Users, Calendar, BarChart3, Settings, PlusSquare, MessageSquare, LayoutGrid } from "lucide-react";
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
  { title: "Overview", icon: Home, url: "#", isActive: true },
  { title: "Create Content", icon: PlusSquare, url: "#" },
  { title: "Campaign", icon: LayoutGrid, url: "#" },
  { title: "Schedule", icon: Calendar, url: "#" },
  { title: "Connect Account", icon: Users, url: "#" },
  { title: "Analytics", icon: BarChart3, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

const DashboardSidebar = () => {
  return (
    <Sidebar className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-[260px] border-r border-gray-100 bg-white">
      <SidebarContent>
        <div className="px-4 py-3">
          <div className="flex items-center space-x-2">
            <h2 className="text-sm font-semibold">My Workspace</h2>
          </div>
          <p className="text-xs text-gray-500">Free Plan</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} className={item.isActive ? "bg-purple-50 text-purple-600" : ""}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
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
};

export default DashboardSidebar;
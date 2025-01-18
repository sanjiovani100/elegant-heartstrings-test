import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  LayoutDashboard,
  Settings,
  Users,
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
import { ProfileSection } from "./ProfileSection";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Events",
    icon: Calendar,
    href: "/dashboard/events",
  },
  {
    title: "Talent",
    icon: Users,
    href: "/dashboard/talent",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="fixed left-0 w-64 h-[calc(100vh-4rem)] bg-sponsor-bg-primary border-r border-sponsor-border-input shadow-sm">
      <SidebarContent>
        <ProfileSection />
        <SidebarGroup>
          <SidebarGroupLabel className="text-sponsor-text-label font-medium px-4 py-2">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.href}
                    className="flex items-center gap-3 px-4 py-2 text-sponsor-text-primary hover:bg-sponsor-bg-secondary rounded-lg transition-colors"
                  >
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
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
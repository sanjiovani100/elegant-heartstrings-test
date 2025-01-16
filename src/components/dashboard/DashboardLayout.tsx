import { cn } from "@/lib/utils";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, PenSquare, Megaphone, Calendar, Link2, BarChart3, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const menuItems = [
  { icon: Home, label: "Overview", href: "#", active: true },
  { icon: PenSquare, label: "Create Content", href: "#" },
  { icon: Megaphone, label: "Campaign", href: "#" },
  { icon: Calendar, label: "Schedule", href: "#" },
  { icon: Link2, label: "Connect Account", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-16 flex">
          <Sidebar className="bg-white border-r">
            <SidebarContent>
              <div className="py-4">
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold">My Workspace</h2>
                  <p className="px-4 text-sm text-muted-foreground">Free Plan</p>
                </div>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "w-full flex items-center gap-3 px-4",
                          item.active && "bg-purple-50 text-purple-600"
                        )}
                      >
                        <a href={item.href}>
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </div>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
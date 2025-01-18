import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { ProfileSection } from "./ProfileSection";
import { NavSection } from "./NavSection";

export function DashboardSidebar() {
  return (
    <Sidebar className="hidden md:block fixed left-0 h-[calc(100vh-64px)] w-64 border-r border-gray-200 bg-white">
      <SidebarContent className="py-4">
        <ProfileSection />
        <NavSection />
      </SidebarContent>
    </Sidebar>
  );
}
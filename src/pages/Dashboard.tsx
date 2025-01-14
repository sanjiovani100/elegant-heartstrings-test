import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardContent } from "@/components/dashboard/DashboardContent"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  )
}
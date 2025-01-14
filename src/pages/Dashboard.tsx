import { Routes, Route } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar"
import { DashboardOverview } from "@/components/dashboard/sections/DashboardOverview"
import { EventManagement } from "@/components/dashboard/sections/EventManagement"
import { TicketManagement } from "@/components/dashboard/sections/TicketManagement"
import { StakeholderManagement } from "@/components/dashboard/sections/StakeholderManagement"
import { Communication } from "@/components/dashboard/sections/Communication"
import { ContentManagement } from "@/components/dashboard/sections/ContentManagement"
import { Settings } from "@/components/dashboard/sections/Settings"

export default function Dashboard() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-gray-50">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardTopbar />
          <div className="flex-1 p-4 md:p-6">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="events" element={<EventManagement />} />
              <Route path="tickets" element={<TicketManagement />} />
              <Route path="stakeholders" element={<StakeholderManagement />} />
              <Route path="communication" element={<Communication />} />
              <Route path="content" element={<ContentManagement />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
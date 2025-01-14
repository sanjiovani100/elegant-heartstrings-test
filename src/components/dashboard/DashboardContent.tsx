import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardContent() {
  return (
    <SidebarInset className="bg-gray-50">
      <div className="p-6">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          {/* Content will be added in subsequent implementations */}
          <p className="text-gray-600 font-inter">
            Welcome to the Fashionistas Dashboard
          </p>
        </main>
      </div>
    </SidebarInset>
  )
}
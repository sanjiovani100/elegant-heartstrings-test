import { Calendar, DollarSign, Users } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";

// Mock data - In a real app, this would come from an API
const metrics = [
  {
    title: "Total Tickets Sold",
    value: "1,250",
    trend: { value: "↑ 12%", isPositive: true },
    icon: Calendar,
  },
  {
    title: "Revenue Generated",
    value: "$37,500",
    trend: { value: "↑ 15%", isPositive: true },
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "68 Total",
    trend: { value: "45 Models, 15 Designers, 8 Sponsors", isPositive: true },
    icon: Users,
  },
  {
    title: "Event Countdown",
    value: "10 Days, 4 Hours",
    icon: Calendar,
  },
];

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F9FAFB] dark:bg-background">
        <AppSidebar />
        <main className="flex-1 p-6 lg:pl-[calc(260px+1.5rem)]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>

          {/* Hero Metrics */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                trend={metric.trend}
              />
            ))}
          </div>

          {/* Additional sections will be added here */}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
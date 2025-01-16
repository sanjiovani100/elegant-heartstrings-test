import { Users, ArrowUpRight, Users2, BarChart2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";

const metrics = [
  {
    title: "User Engagement",
    value: "6,650",
    change: { value: 14, type: "increase" as const },
    daily: { value: 210, label: "today" },
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Traffic Sources",
    value: "991",
    change: { value: 20, type: "increase" as const },
    daily: { value: 70, label: "today" },
    icon: <ArrowUpRight className="h-6 w-6" />,
  },
  {
    title: "Audience Growth",
    value: "3,147",
    change: { value: 10, type: "decrease" as const },
    daily: { value: 60, label: "today" },
    icon: <Users2 className="h-6 w-6" />,
  },
  {
    title: "Content Performance",
    value: "14,321",
    change: { value: 27, type: "increase" as const },
    daily: { value: 760, label: "today" },
    icon: <BarChart2 className="h-6 w-6" />,
  },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold">Overview</h1>
          <p className="text-muted-foreground">Let's see an overview of your social media</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-4">Visit by Location</h2>
            {/* Map component will go here */}
          </div>
          
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-4">Social Media Audience</h2>
            {/* Social media stats will go here */}
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-4">Post Schedule</h2>
            {/* Calendar component will go here */}
          </div>
          
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-4">Post Insights</h2>
            {/* Insights component will go here */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
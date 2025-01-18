import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { MetricCard } from "./MetricCard";

export const MetricsGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Attendees"
        value="1,234"
        icon={Users}
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Revenue"
        value="$45,231"
        icon={DollarSign}
        trend={{ value: 8.2, isPositive: true }}
      />
      <MetricCard
        title="Events"
        value="12"
        icon={Calendar}
        description="4 upcoming"
      />
      <MetricCard
        title="Growth"
        value="24%"
        icon={TrendingUp}
        trend={{ value: 5.1, isPositive: true }}
      />
    </div>
  );
};
import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react";
import MetricCard from "./MetricCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hero Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value="1,234"
          icon={<Users className="h-4 w-4 text-blue-500" />}
          description="+12% from last month"
        />
        <MetricCard
          title="Revenue"
          value="$12,345"
          icon={<DollarSign className="h-4 w-4 text-green-500" />}
          description="+8% from last month"
        />
        <MetricCard
          title="Events"
          value="23"
          icon={<Calendar className="h-4 w-4 text-purple-500" />}
          description="5 upcoming this week"
        />
        <MetricCard
          title="Growth"
          value="+15%"
          icon={<TrendingUp className="h-4 w-4 text-red-500" />}
          description="Compared to last quarter"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Visit by Location</h3>
          <div className="h-[300px] bg-gray-100 rounded-md"></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Social Media Audience</h3>
          <div className="h-[300px] bg-gray-100 rounded-md"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Post Schedule</h3>
          <div className="h-[300px] bg-gray-100 rounded-md"></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Post Insights</h3>
          <div className="h-[300px] bg-gray-100 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
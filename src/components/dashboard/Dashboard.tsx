import { Users, TrendingUp, Users2, BarChart } from "lucide-react";
import MetricCard from "./MetricCard";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold mb-1">Overview</h1>
        <p className="text-sm text-gray-500">Let's see an overview of your social media</p>
      </div>

      {/* Hero Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="User Engagement"
          value="6,650"
          change="+14%"
          changeText="210 today"
          icon={<Users className="h-4 w-4 text-blue-500" />}
          positive
        />
        <MetricCard
          title="Traffic Sources"
          value="991"
          change="+20%"
          changeText="70 today"
          icon={<TrendingUp className="h-4 w-4 text-green-500" />}
          positive
        />
        <MetricCard
          title="Audience Growth"
          value="3,147"
          change="-10%"
          changeText="60 today"
          icon={<Users2 className="h-4 w-4 text-red-500" />}
          positive={false}
        />
        <MetricCard
          title="Content Performance"
          value="14,321"
          change="+27%"
          changeText="760 today"
          icon={<BarChart className="h-4 w-4 text-purple-500" />}
          positive
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Visit by Location</h3>
          <div className="h-[300px] bg-gray-50 rounded-md"></div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Social Media Audience</h3>
          <div className="h-[300px] bg-gray-50 rounded-md"></div>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Post Schedule</h3>
          <div className="h-[300px] bg-gray-50 rounded-md"></div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Post Insights</h3>
          <div className="h-[300px] bg-gray-50 rounded-md"></div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
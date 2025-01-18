import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-playfair text-3xl md:text-4xl text-sponsor-text-primary mb-2">
            Dashboard
          </h1>
          <p className="text-sponsor-text-secondary">
            Welcome to your Fashionistas admin dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg mb-4">Total Tickets</h3>
            <p className="text-3xl font-inter font-semibold text-fashionista-red">1,250</p>
            <p className="text-sm text-sponsor-text-secondary mt-2">↑12% from last month</p>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg mb-4">Revenue</h3>
            <p className="text-3xl font-inter font-semibold text-fashionista-red">$37,500</p>
            <p className="text-sm text-sponsor-text-secondary mt-2">↑15% from last month</p>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg mb-4">Event Countdown</h3>
            <p className="text-3xl font-inter font-semibold text-fashionista-red">10</p>
            <p className="text-sm text-sponsor-text-secondary mt-2">Days remaining</p>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg mb-4">Active Users</h3>
            <p className="text-3xl font-inter font-semibold text-fashionista-red">68</p>
            <p className="text-sm text-sponsor-text-secondary mt-2">Currently online</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
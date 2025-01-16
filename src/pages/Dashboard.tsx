import React from 'react';
import { ArrowDown, ArrowUp, Calendar, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - In a real app, this would come from an API
const metrics = [
  {
    title: "Total Tickets Sold",
    value: "1,234",
    trend: "+12.5%",
    isPositive: true,
    icon: Calendar
  },
  {
    title: "Revenue Generated",
    value: "$45,678",
    trend: "+8.2%",
    isPositive: true,
    icon: DollarSign
  },
  {
    title: "Total Participants",
    value: "789",
    trend: "-3.1%",
    isPositive: false,
    icon: Users
  },
  {
    title: "Event Countdown",
    value: "14 days",
    trend: "Next Event",
    isPositive: true,
    icon: Calendar
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-background">
      {/* Header */}
      <header className="h-16 border-b bg-white dark:bg-background px-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Hero Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card key={metric.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`flex items-center text-sm ${
                  metric.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.isPositive ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {metric.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stakeholder Management Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Management</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for stakeholder management content */}
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Stakeholder Management Content
              </div>
            </CardContent>
          </Card>

          {/* Schedule Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule Management</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for schedule management content */}
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Schedule Management Content
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Sales and Financial Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Sales</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for ticket sales content */}
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Ticket Sales Content
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for financial analytics content */}
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Financial Analytics Content
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
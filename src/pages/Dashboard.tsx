import React from 'react';
import { ArrowDown, ArrowUp, Calendar, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <SidebarProvider>
          <div className="flex w-full">
            <aside className="fixed top-[4rem] bottom-0 w-[16rem] bg-white border-r border-gray-200 z-30 transition-transform duration-300 ease-in-out lg:translate-x-0">
              <DashboardSidebar />
            </aside>
            
            <main className="flex-1 flex flex-col min-h-0 w-full lg:pl-[16rem]">
              <div className="flex-1 p-6 bg-[#F9FAFB]">
                <div className="max-w-[1180px] mx-auto">
                  <header className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {metrics.map((metric) => (
                      <Card 
                        key={metric.title} 
                        className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium text-gray-600">
                            {metric.title}
                          </CardTitle>
                          <metric.icon className="h-4 w-4 text-gray-600" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Card className="bg-white shadow-sm border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Stakeholder Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center text-gray-600">
                          Stakeholder Management Content
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Schedule Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center text-gray-600">
                          Schedule Management Content
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Ticket Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center text-gray-600">
                          Ticket Sales Content
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Financial Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center text-gray-600">
                          Financial Analytics Content
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <Footer />
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Dashboard;

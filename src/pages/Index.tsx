import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex pt-16">
          <DashboardSidebar />
          <main className="flex-1 px-6 pt-6 pb-8 lg:pl-[276px]">
            <Dashboard />
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
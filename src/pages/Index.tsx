import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-[80px]">
          <div className="flex">
            <DashboardSidebar />
            <main className="flex-1 lg:ml-[260px]">
              <Dashboard />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
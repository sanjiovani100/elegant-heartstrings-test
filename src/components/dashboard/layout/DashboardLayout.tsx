import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "../sidebar/DashboardSidebar";
import { ErrorBoundary } from "../shared/ErrorBoundary";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white text-gray-900">
        <Navbar />
        <div className="flex-1 pt-16">
          <div className="flex min-h-[calc(100vh-4rem)]">
            <DashboardSidebar />
            <main className="flex-1 overflow-auto ml-64 bg-white">
              <div className="container mx-auto px-6 py-8">
                <div className="max-w-7xl mx-auto">
                  <ErrorBoundary>{children}</ErrorBoundary>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};
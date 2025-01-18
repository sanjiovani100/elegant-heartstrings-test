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
      <div className="min-h-screen flex w-full flex-col">
        <Navbar />
        <div className="flex-1 pt-16">
          <div className="flex min-h-[calc(100vh-4rem)]">
            <DashboardSidebar />
            <main className="flex-1 bg-white p-6">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};
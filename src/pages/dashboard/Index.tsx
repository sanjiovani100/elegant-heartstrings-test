import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import { MetricsGrid } from "@/components/dashboard/metrics/MetricsGrid";
import { RoleProtectedRoute } from "@/components/auth/RoleProtectedRoute";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <MetricsGrid />
      </div>
    </DashboardLayout>
  );
};

const ProtectedDashboardPage = () => {
  return (
    <RoleProtectedRoute allowedRoles={["admin"]} requireAuth>
      <DashboardPage />
    </RoleProtectedRoute>
  );
};

export default ProtectedDashboardPage;
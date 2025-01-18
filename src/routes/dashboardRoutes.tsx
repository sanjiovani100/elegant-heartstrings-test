import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import DashboardPage from "@/pages/dashboard/index";
import DashboardEventsPage from "@/pages/dashboard/events/index";
import DashboardTalentPage from "@/pages/dashboard/talent/index";
import DashboardSponsorsPage from "@/pages/dashboard/sponsors/index";
import DashboardTicketsPage from "@/pages/dashboard/tickets/index";
import DashboardAnalyticsPage from "@/pages/dashboard/analytics/index";
import DashboardSettingsPage from "@/pages/dashboard/settings/index";
import DashboardRolesPage from "@/pages/dashboard/settings/roles/index";
import CreateEventPage from "@/pages/dashboard/events/create";

export const dashboardRoutes = {
  path: "dashboard",
  element: (
    <ProtectedRoute>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <DashboardPage /> },
    {
      path: "events",
      children: [
        { index: true, element: <DashboardEventsPage /> },
        {
          path: "create",
          element: (
            <RoleProtectedRoute allowedRoles={["admin"]}>
              <CreateEventPage />
            </RoleProtectedRoute>
          ),
        },
      ],
    },
    { path: "talent", element: <DashboardTalentPage /> },
    { path: "sponsors", element: <DashboardSponsorsPage /> },
    { path: "tickets", element: <DashboardTicketsPage /> },
    { path: "analytics", element: <DashboardAnalyticsPage /> },
    {
      path: "settings",
      children: [
        { index: true, element: <DashboardSettingsPage /> },
        {
          path: "roles",
          element: (
            <RoleProtectedRoute allowedRoles={["admin"]}>
              <DashboardRolesPage />
            </RoleProtectedRoute>
          ),
        },
      ],
    },
  ],
};
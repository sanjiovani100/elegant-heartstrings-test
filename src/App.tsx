import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/auth/RoleProtectedRoute";

// Public Pages
import HomePage from "@/pages/Index";
import AboutPage from "@/pages/about/Index";
import SchedulePage from "@/pages/schedule/Index";
import TicketsPage from "@/pages/tickets/index";
import DesignersPage from "@/pages/designers/Index";
import SponsorsPage from "@/pages/sponsors/index";
import ModelsPage from "@/pages/models/index";
import ContactPage from "@/pages/contact/Index";
import FAQPage from "@/pages/faqs/Index";

// Auth Pages
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import ProfilePage from "@/pages/profile/index";

// Dashboard Pages
import DashboardPage from "@/pages/dashboard/Index";
import DashboardEventsPage from "@/pages/dashboard/events/Index";
import DashboardTalentPage from "@/pages/dashboard/talent/Index";
import DashboardSponsorsPage from "@/pages/dashboard/sponsors/Index";
import DashboardTicketsPage from "@/pages/dashboard/tickets/Index";
import DashboardAnalyticsPage from "@/pages/dashboard/analytics/Index";
import DashboardSettingsPage from "@/pages/dashboard/settings/Index";
import DashboardRolesPage from "@/pages/dashboard/settings/roles/Index";
import CreateEventPage from "@/pages/dashboard/events/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "schedule", element: <SchedulePage /> },
      { path: "tickets", element: <TicketsPage /> },
      { path: "designers", element: <DesignersPage /> },
      { path: "sponsors", element: <SponsorsPage /> },
      { path: "models", element: <ModelsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "faqs", element: <FAQPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
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
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
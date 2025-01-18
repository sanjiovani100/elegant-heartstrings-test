import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/auth/RoleProtectedRoute";

// Public Pages
import HomePage from "@/pages/index";
import AboutPage from "@/pages/about/index";
import SchedulePage from "@/pages/schedule/index";
import TicketsPage from "@/pages/tickets/index";
import DesignersPage from "@/pages/designers/index";
import SponsorsPage from "@/pages/sponsors/index";
import ModelsPage from "@/pages/models/index";
import ContactPage from "@/pages/contact/index";
import FAQPage from "@/pages/faqs/index";

// Auth Pages
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import ProfilePage from "@/pages/profile/index";

// Dashboard Pages
import DashboardPage from "@/pages/dashboard/index";
import DashboardEventsPage from "@/pages/dashboard/events/index";
import DashboardTalentPage from "@/pages/dashboard/talent/index";
import DashboardSponsorsPage from "@/pages/dashboard/sponsors/index";
import DashboardTicketsPage from "@/pages/dashboard/tickets/index";
import DashboardAnalyticsPage from "@/pages/dashboard/analytics/index";
import DashboardSettingsPage from "@/pages/dashboard/settings/index";
import DashboardRolesPage from "@/pages/dashboard/settings/roles/index";
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
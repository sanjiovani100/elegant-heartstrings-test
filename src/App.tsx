import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import EventsPage from "@/pages/events/Index";
import TicketsPage from "@/pages/tickets/Index";
import SponsorsPage from "@/pages/sponsors/Index";
import SponsorshipApplicationPage from "@/pages/sponsors/Apply";
import DesignerPage from "@/pages/designer/Index";
import ModelsPage from "@/pages/models/Index";
import ProfilePage from "@/pages/profile/Index";
import RolesPage from "@/pages/admin/roles/Index";
import CreateEventPage from "@/pages/admin/events/Create";
import DashboardPage from "@/pages/dashboard/Index";
import DashboardEventsPage from "@/pages/dashboard/events/Index";
import DashboardTalentPage from "@/pages/dashboard/talent/Index";
import DashboardAnalyticsPage from "@/pages/dashboard/analytics/Index";
import DashboardSettingsPage from "@/pages/dashboard/settings/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EventsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/tickets",
    element: <TicketsPage />,
  },
  {
    path: "/sponsors",
    element: <SponsorsPage />,
  },
  {
    path: "/sponsors/apply",
    element: <SponsorshipApplicationPage />,
  },
  {
    path: "/designer",
    element: <DesignerPage />,
  },
  {
    path: "/models",
    element: <ModelsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/admin/roles",
    element: <RolesPage />,
  },
  {
    path: "/admin/events/create",
    element: <CreateEventPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/events",
    element: <DashboardEventsPage />,
  },
  {
    path: "/dashboard/talent",
    element: <DashboardTalentPage />,
  },
  {
    path: "/dashboard/analytics",
    element: <DashboardAnalyticsPage />,
  },
  {
    path: "/dashboard/settings",
    element: <DashboardSettingsPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
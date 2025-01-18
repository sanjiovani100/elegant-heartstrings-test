import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/Index";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import EventsPage from "@/pages/events/Index";
import TicketsPage from "@/pages/tickets/Index";
import SponsorsPage from "@/pages/sponsors/Index";
import SponsorsApplyPage from "@/pages/sponsors/Apply";
import DesignerPage from "@/pages/designer/Index";
import ModelsPage from "@/pages/models/Index";
import ProfilePage from "@/pages/profile/Index";
import AdminRolesPage from "@/pages/admin/roles/Index";
import CreateEventPage from "@/pages/admin/events/Create";
import DashboardPage from "@/pages/dashboard/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    element: <SponsorsApplyPage />,
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
    element: <AdminRolesPage />,
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
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/talent",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/analytics",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/settings",
    element: <DashboardPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;

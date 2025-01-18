import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/Index";
import LoginPage from "@/pages/auth/Login";
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
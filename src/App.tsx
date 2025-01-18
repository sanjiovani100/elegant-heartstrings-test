import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "@/routes/publicRoutes";
import { authRoutes } from "@/routes/authRoutes";
import { dashboardRoutes } from "@/routes/dashboardRoutes";

const router = createBrowserRouter([
  ...publicRoutes,
  ...authRoutes,
  ...dashboardRoutes,
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
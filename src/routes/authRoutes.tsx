import { AuthLayout } from "@/components/layouts/AuthLayout";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import ProfilePage from "@/pages/profile/index";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export const authRoutes = {
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
};
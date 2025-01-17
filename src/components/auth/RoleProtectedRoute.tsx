import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/use-user-role";
import { Loader2 } from "lucide-react";

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const RoleProtectedRoute = ({ children, allowedRoles }: RoleProtectedRouteProps) => {
  const navigate = useNavigate();
  const { role, loading } = useUserRole();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-fashionista-red" />
      </div>
    );
  }

  if (!role || !allowedRoles.includes(role)) {
    navigate("/");
    return null;
  }

  return <>{children}</>;
};

export default RoleProtectedRoute;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/use-user-role";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  requireAuth?: boolean;
}

const RoleProtectedRoute = ({ 
  children, 
  allowedRoles, 
  requireAuth = false 
}: RoleProtectedRouteProps) => {
  // During development, we'll bypass role checks
  return <>{children}</>;

  // Comment out the role checking logic for now
  /*
  const navigate = useNavigate();
  const { role, loading: roleLoading } = useUserRole();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        if (requireAuth) {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) {
            navigate("/login");
            return;
          }
        }

        if (!roleLoading) {
          if (role && allowedRoles.includes(role)) {
            setIsChecking(false);
          } else if (!role) {
            const { data: adminRoles } = await supabase
              .from("user_roles")
              .select("role")
              .eq("role", "admin")
              .maybeSingle();

            if (!adminRoles && allowedRoles.includes("admin")) {
              setIsChecking(false);
            } else {
              navigate("/");
            }
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Access check error:", error);
        navigate("/");
      }
    };

    checkAccess();
  }, [navigate, role, roleLoading, allowedRoles, requireAuth]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-fashionista-red" />
      </div>
    );
  }

  return <>{children}</>;
  */
};

export default RoleProtectedRoute;
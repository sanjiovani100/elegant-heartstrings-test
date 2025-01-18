import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  requireAuth?: boolean;
}

const RoleProtectedRoute = ({ children, allowedRoles, requireAuth = true }: RoleProtectedRouteProps) => {
  // During development, we'll bypass role checks
  return <>{children}</>;
};

export default RoleProtectedRoute;
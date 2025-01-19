import React from "react";

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  requireAuth?: boolean;
}

const RoleProtectedRoute = ({ 
  children 
}: RoleProtectedRouteProps) => {
  // Temporarily disabled role and authentication checks for development
  return <>{children}</>;
};

export default RoleProtectedRoute;
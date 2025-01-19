import React from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Temporarily disabled authentication check for development
  return <>{children}</>;
};

export default ProtectedRoute;
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/95">
      <main className="w-full max-w-md p-4">
        <Outlet />
      </main>
    </div>
  );
};
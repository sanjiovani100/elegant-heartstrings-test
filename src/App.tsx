import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Models from "@/pages/Models";
import Designer from "@/pages/Designer";
import EventsListing from "@/pages/events/EventsListing";
import Tickets from "@/pages/Tickets";
import Roadmap from "@/pages/Roadmap";
import Changelog from "@/pages/Changelog";
import Sponsors from "@/pages/Sponsors";
import SponsorshipApplication from "@/pages/sponsors/SponsorshipApplication";
import ProfilePage from "@/components/profile/ProfilePage";
import Login from "@/pages/auth/Login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import RoleManagement from "@/components/admin/RoleManagement";
import CreateEvent from "@/pages/admin/CreateEvent";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/models" element={<Models />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/events" element={<EventsListing />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route 
          path="/sponsors/apply" 
          element={
            <ProtectedRoute>
              <SponsorshipApplication />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/roles"
          element={
            <RoleProtectedRoute allowedRoles={["admin"]} requireAuth={false}>
              <RoleManagement />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/admin/events/create"
          element={
            <RoleProtectedRoute allowedRoles={["admin"]} requireAuth={false}>
              <CreateEvent />
            </RoleProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
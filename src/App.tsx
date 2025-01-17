import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Models from "@/pages/Models";
import Designer from "@/pages/Designer";
import Events from "@/pages/Events";
import Tickets from "@/pages/Tickets";
import Roadmap from "@/pages/Roadmap";
import Changelog from "@/pages/Changelog";
import Sponsors from "@/pages/Sponsors";
import ProfilePage from "@/components/profile/ProfilePage";
import Login from "@/pages/auth/Login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/models" element={<Models />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      setIsAuthenticated(true);
    };

    checkAuth();
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Profile Management</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
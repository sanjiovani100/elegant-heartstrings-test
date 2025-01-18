import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserRole } from "@/hooks/use-user-role";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { LoadingState } from "../shared/LoadingState";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

export const ProfileSection = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { role } = useUserRole();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) return;

        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", session.user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <LoadingState />;

  return (
    <div className="flex items-center space-x-4 px-4 py-4 border-b border-gray-200">
      <Avatar>
        <AvatarImage src={profile?.avatar_url || undefined} />
        <AvatarFallback className="bg-gray-200 text-gray-700">
          {profile?.full_name?.[0]?.toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-900">
          {profile?.full_name || "User"}
        </p>
        <p className="text-xs text-gray-500 capitalize">
          {role || "Loading..."}
        </p>
      </div>
    </div>
  );
};
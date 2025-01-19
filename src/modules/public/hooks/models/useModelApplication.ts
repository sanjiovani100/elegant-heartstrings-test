import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ApplicationStatus {
  status: string;
  submitted_at: string | null;
  feedback?: string;
}

export const useModelApplication = (userId?: string) => {
  const [status, setStatus] = useState<ApplicationStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('model_applications')
          .select('status, created_at, feedback')
          .eq('user_id', userId)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          setStatus({
            status: data.status,
            submitted_at: data.created_at,
            feedback: data.feedback,
          });
        }
      } catch (error) {
        console.error('Error fetching application status:', error);
        toast({
          title: "Error",
          description: "Failed to fetch application status",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicationStatus();
  }, [userId, toast]);

  return {
    status,
    isLoading,
  };
};
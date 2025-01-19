import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { ModelFormData } from "@/types/supabase/database/tables/profile.types";

export const useModelForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitApplication = async (data: ModelFormData) => {
    try {
      setIsSubmitting(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to submit your application.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('model_applications')
        .insert([{
          user_id: user.id,
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          experience: data.experience,
          portfolio_link: data.portfolioLink || null,
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your model application has been submitted successfully.",
      });

      return true;
    } catch (error) {
      console.error('Model application submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitApplication,
  };
};
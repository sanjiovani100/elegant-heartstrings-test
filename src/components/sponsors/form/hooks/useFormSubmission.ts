import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData } from "../types";
import { uploadFile, uploadFiles } from "./submission/useFileUpload";
import { saveApplicationToDatabase } from "./submission/useDatabaseSubmission";

export const useFormSubmission = (form: UseFormReturn<SponsorshipFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: SponsorshipFormData) => {
    try {
      setIsSubmitting(true);
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("No user found");

      // Upload logo and promotional materials
      let logoUrl = null;
      if (data.branding.logo) {
        logoUrl = await uploadFile(data.branding.logo, user.id, 'logo');
      }

      const promoUrls = await uploadFiles(data.branding.promotionalMaterials, user.id, 'promo');

      // Save application to database
      await saveApplicationToDatabase(data, user.id, logoUrl, promoUrls);

      toast({
        title: "Success",
        description: "Your sponsorship application has been submitted successfully",
      });

      localStorage.removeItem("sponsorshipFormDraft");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, onSubmit };
};
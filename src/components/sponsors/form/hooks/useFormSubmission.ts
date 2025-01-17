import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData } from "../types";

export const useFormSubmission = (form: UseFormReturn<SponsorshipFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: SponsorshipFormData) => {
    try {
      setIsSubmitting(true);
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("No user found");

      // Upload logo
      const logoFile = data.branding.logo;
      let logoUrl = null;
      if (logoFile) {
        const fileExt = logoFile.name.split(".").pop();
        const filePath = `${user.id}/logo.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("sponsorship-assets")
          .upload(filePath, logoFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("sponsorship-assets")
          .getPublicUrl(filePath);
        
        logoUrl = publicUrl;
      }

      // Upload promotional materials
      const promotionalUrls = await Promise.all(
        data.branding.promotionalMaterials.map(async (file, index) => {
          const fileExt = file.name.split(".").pop();
          const filePath = `${user.id}/promo-${index}.${fileExt}`;
          await supabase.storage
            .from("sponsorship-assets")
            .upload(filePath, file);

          const { data: { publicUrl } } = supabase.storage
            .from("sponsorship-assets")
            .getPublicUrl(filePath);
          
          return publicUrl;
        })
      );

      // Save application to database
      const { error: dbError } = await supabase
        .from("sponsorship_applications")
        .insert({
          sponsor_id: user.id,
          status: "submitted",
          contact_name: data.sponsorInfo.contactName,
          contact_email: data.sponsorInfo.contactEmail,
          contact_phone: data.sponsorInfo.contactPhone,
          website_links: data.sponsorInfo.websiteLinks,
          event_segments: data.preferences.eventSegments,
          sponsorship_goals: data.preferences.goals,
          target_audience: data.preferences.targetAudience,
          company_tagline: data.branding.companyTagline,
          custom_branding_requests: data.branding.brandingRequests,
          contribution_type: data.contribution.type,
          contribution_details: data.contribution.inKindDetails,
          contribution_range: data.contribution.amount,
          company_background: data.additionalInfo.companyBackground,
          previous_sponsorships: {
            has_previous: data.additionalInfo.hasPreviousSponsorship,
            details: data.additionalInfo.previousSponsorshipDetails,
          },
          event_participation: {
            will_participate: data.additionalInfo.willParticipate,
            attendee_count: data.additionalInfo.attendeeCount,
            vip_requirements: data.additionalInfo.vipRequirements,
          },
          terms_accepted: data.agreement.termsAccepted,
          signature_data: {
            signature: data.agreement.signature,
            signed_at: new Date().toISOString(),
          },
        });

      if (dbError) throw dbError;

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
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData } from "../types";
import { uploadSponsorshipFile } from "@/utils/fileUpload";

export const useFormSubmission = (form: UseFormReturn<SponsorshipFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: SponsorshipFormData) => {
    try {
      setIsSubmitting(true);
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No authenticated user found");

      // Upload logo if provided
      let logoUrl = null;
      if (data.branding.logo instanceof File) {
        logoUrl = await uploadSponsorshipFile(data.branding.logo, user.id, 'logo');
      }

      // Upload promotional materials if provided
      const promoUrls = await Promise.all(
        (data.branding.promotionalMaterials || []).map(file => 
          uploadSponsorshipFile(file as File, user.id, 'promo')
        )
      );

      // Get or create sponsor profile
      const { data: sponsorProfile } = await supabase
        .from('sponsor_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!sponsorProfile) {
        throw new Error("Sponsor profile not found");
      }

      // Create sponsorship application
      const { error: applicationError } = await supabase
        .from('sponsorship_applications')
        .insert({
          sponsor_id: sponsorProfile.id,
          status: 'draft',
          industry: data.sponsorInfo.industry,
          contact_name: data.sponsorInfo.contactName,
          contact_email: data.sponsorInfo.contactEmail,
          contact_phone: data.sponsorInfo.contactPhone,
          website_links: data.sponsorInfo.websiteLinks,
          event_segments: data.preferences.eventSegments,
          sponsorship_goals: data.preferences.goals,
          target_audience: data.preferences.targetAudience,
          custom_branding_requests: data.branding.brandingRequests,
          company_tagline: data.branding.companyTagline,
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

      if (applicationError) throw applicationError;

      toast({
        title: "Success",
        description: "Your sponsorship application has been submitted successfully",
      });

      // Clear draft from localStorage
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
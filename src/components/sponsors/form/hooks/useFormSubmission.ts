import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData } from "../types";
import { uploadSponsorshipFile } from "@/utils/fileUpload";

interface SubmissionError {
  code: string;
  message: string;
}

export const useFormSubmission = (form: UseFormReturn<SponsorshipFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateSponsorProfile = async (userId: string) => {
    const { data: sponsorProfile, error } = await supabase
      .from("sponsor_profiles")
      .select("id")
      .eq("user_id", userId)
      .single();

    if (error || !sponsorProfile) {
      throw new Error("No sponsor profile found. Please create a sponsor profile first.");
    }

    return sponsorProfile.id;
  };

  const handleFileUploads = async (userId: string, files: { logo?: File, promotionalMaterials?: File[] }) => {
    const uploadResults = {
      logoUrl: "",
      promoUrls: [] as string[]
    };

    if (files.logo) {
      uploadResults.logoUrl = await uploadSponsorshipFile(files.logo, userId, 'logo');
    }

    if (files.promotionalMaterials?.length) {
      uploadResults.promoUrls = await Promise.all(
        files.promotionalMaterials.map(file => uploadSponsorshipFile(file, userId, 'promo'))
      );
    }

    return uploadResults;
  };

  const onSubmit = async (data: SponsorshipFormData) => {
    try {
      setIsSubmitting(true);
      
      // Check authentication
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("Please sign in to submit your application");
      }

      // Validate sponsor profile
      const sponsorId = await validateSponsorProfile(user.id);

      // Handle file uploads
      const { logoUrl, promoUrls } = await handleFileUploads(user.id, {
        logo: data.branding.logo instanceof File ? data.branding.logo : undefined,
        promotionalMaterials: Array.isArray(data.branding.promotionalMaterials) 
          ? data.branding.promotionalMaterials.filter(file => file instanceof File)
          : []
      });

      // Prepare application data
      const applicationData = {
        sponsor_id: sponsorId,
        status: 'submitted',
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
        submitted_at: new Date().toISOString(),
      };

      // Submit application
      const { error: submissionError } = await supabase
        .from('sponsorship_applications')
        .insert(applicationData);

      if (submissionError) throw submissionError;

      // Clear form draft from localStorage
      localStorage.removeItem("sponsorshipFormDraft");

      toast({
        title: "Success",
        description: "Your sponsorship application has been submitted successfully.",
      });

      // Optionally redirect to a success page or dashboard
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = "Failed to submit application. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, onSubmit };
};
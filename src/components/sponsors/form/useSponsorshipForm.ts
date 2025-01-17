import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData, sponsorshipFormSchema } from "./types";

export const useSponsorshipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoSaveTimer, setAutoSaveTimer] = useState<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  const form = useForm<SponsorshipFormData>({
    resolver: zodResolver(sponsorshipFormSchema),
    defaultValues: {
      sponsorInfo: {
        websiteLinks: [{ type: "website", url: "" }],
      },
      preferences: {
        eventSegments: [],
        goals: [],
        targetAudience: {
          ageRange: { min: 18, max: 65 },
          location: "",
          profession: "",
          interests: [],
        },
      },
      branding: {
        promotionalMaterials: [],
        brandingRequests: "",
        companyTagline: "",
      },
      contribution: {
        type: "financial",
        amount: { min: 0, max: 0 },
        currency: "USD",
      },
      additionalInfo: {
        companyBackground: "",
        hasPreviousSponsorship: false,
        willParticipate: false,
      },
      agreement: {
        termsAccepted: false,
        signature: "",
      },
    },
  });

  // Load draft from local storage
  useEffect(() => {
    const savedDraft = localStorage.getItem("sponsorshipFormDraft");
    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft);
        form.reset(parsedDraft);
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
  }, [form]);

  // Auto-save functionality
  useEffect(() => {
    const saveDraft = () => {
      const formData = form.getValues();
      localStorage.setItem("sponsorshipFormDraft", JSON.stringify(formData));
      toast({
        title: "Draft saved",
        description: "Your progress has been automatically saved",
      });
    };

    // Clear existing timer
    if (autoSaveTimer) {
      clearInterval(autoSaveTimer);
    }

    // Set new timer for auto-save every 30 seconds
    const timer = setInterval(saveDraft, 30000);
    setAutoSaveTimer(timer);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [form, toast]);

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

      // Clear draft after successful submission
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

  const nextStep = () => {
    const currentStepData = form.getValues();
    localStorage.setItem("sponsorshipFormDraft", JSON.stringify(currentStepData));
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return {
    form,
    currentStep,
    isSubmitting,
    nextStep,
    previousStep,
    onSubmit,
  };
};
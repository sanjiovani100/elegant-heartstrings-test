import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SponsorshipFormData, sponsorshipFormSchema } from "./types";
import { supabase } from "@/integrations/supabase/client";

export const useSponsorshipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<SponsorshipFormData>({
    resolver: zodResolver(sponsorshipFormSchema),
    mode: "onChange",
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

  const nextStep = async () => {
    const isValid = await isStepValid(currentStep);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    } else {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isStepValid = async (step: number) => {
    let fieldsToValidate: string[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ['sponsorInfo'];
        break;
      case 2:
        fieldsToValidate = ['preferences'];
        break;
      case 3:
        fieldsToValidate = ['branding'];
        break;
      case 4:
        fieldsToValidate = ['contribution'];
        break;
      case 5:
        fieldsToValidate = ['additionalInfo'];
        break;
      case 6:
        fieldsToValidate = ['agreement'];
        break;
      default:
        return false;
    }

    const result = await form.trigger(fieldsToValidate as any);
    return result;
  };

  const onSubmit = async (data: SponsorshipFormData) => {
    try {
      setIsSubmitting(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No authenticated user found");

      const { error } = await supabase
        .from('sponsorship_applications')
        .insert({
          sponsor_id: user.id,
          status: 'draft',
          ...data,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your sponsorship application has been submitted successfully.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit sponsorship application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    currentStep,
    isSubmitting,
    nextStep,
    previousStep,
    onSubmit,
    isStepValid,
  };
};
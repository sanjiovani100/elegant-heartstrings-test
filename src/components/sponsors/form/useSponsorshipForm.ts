import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SponsorshipFormData, sponsorshipFormSchema } from "./types";
import { useFormSubmission } from "./hooks/useFormSubmission";

export const useSponsorshipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

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

  const { isSubmitting, onSubmit } = useFormSubmission(form);

  const nextStep = async () => {
    const isValid = await isStepValid(currentStep);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isStepValid = async (step: number): Promise<boolean> => {
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
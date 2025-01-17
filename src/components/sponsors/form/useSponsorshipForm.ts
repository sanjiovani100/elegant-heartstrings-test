import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SponsorshipFormData, sponsorshipFormSchema } from "./types";
import { useFormNavigation } from "./hooks/useFormNavigation";
import { useFormAutoSave } from "./hooks/useFormAutoSave";
import { useFormSubmission } from "./hooks/useFormSubmission";
import { useFormFileUpload } from "./hooks/useFormFileUpload";

export const useSponsorshipForm = () => {
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

  const { currentStep, nextStep, previousStep } = useFormNavigation();
  const { loadDraft } = useFormAutoSave(form);
  const { isSubmitting, onSubmit } = useFormSubmission(form);
  const { uploadProgress, handleFileUpload } = useFormFileUpload(form);

  return {
    form,
    currentStep,
    isSubmitting,
    uploadProgress,
    nextStep,
    previousStep,
    onSubmit,
    handleFileUpload,
    loadDraft,
  };
};
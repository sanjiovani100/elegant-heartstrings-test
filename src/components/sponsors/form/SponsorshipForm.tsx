import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { SponsorshipFormData, sponsorshipFormSchema } from "./sponsorshipFormSchema";
import { SponsorInfoStep } from "./steps/SponsorInfoStep";
import { PreferencesStep } from "./steps/PreferencesStep";
import { BrandingStep } from "./steps/BrandingStep";
import { ContributionStep } from "./steps/ContributionStep";
import { AdditionalInfoStep } from "./steps/AdditionalInfoStep";
import { AgreementStep } from "./steps/AgreementStep";
import { supabase } from "@/integrations/supabase/client";

const TOTAL_STEPS = 6;

export const SponsorshipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SponsorshipFormData>({
    resolver: zodResolver(sponsorshipFormSchema),
    defaultValues: {
      companyInfo: {
        websiteLinks: [""],
      },
      sponsorshipPreferences: {
        eventSegments: [],
        goals: [],
        targetAudience: {
          interests: [],
        },
      },
      branding: {
        promotionalMaterials: [],
      },
      contribution: {
        contributionRange: {
          min: 0,
          max: 0,
        },
      },
      additionalInfo: {
        hasPreviousSponsorship: false,
        willParticipate: false,
        participationDetails: {},
      },
      agreement: {
        termsAccepted: false,
        signature: "",
      },
    },
  });

  const onSubmit = async (data: SponsorshipFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("sponsorship_applications")
        .insert({
          ...data,
          status: "submitted",
          submitted_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SponsorInfoStep form={form} />;
      case 2:
        return <PreferencesStep form={form} />;
      case 3:
        return <BrandingStep form={form} />;
      case 4:
        return <ContributionStep form={form} />;
      case 5:
        return <AdditionalInfoStep form={form} />;
      case 6:
        return <AgreementStep form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Progress value={(currentStep / TOTAL_STEPS) * 100} className="mb-6" />
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {renderStep()}
        
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button type="button" onClick={previousStep} variant="outline">
              Previous
            </Button>
          )}
          
          {currentStep < TOTAL_STEPS ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SponsorInfoStep } from "./steps/SponsorInfoStep";
import { PreferencesStep } from "./steps/PreferencesStep";
import { BrandingStep } from "./steps/BrandingStep";
import { ContributionStep } from "./steps/ContributionStep";
import { AdditionalInfoStep } from "./steps/AdditionalInfoStep";
import { AgreementStep } from "./steps/AgreementStep";
import { useSponsorshipForm } from "./useSponsorshipForm";

const TOTAL_STEPS = 6;

export const SponsorshipForm = () => {
  const {
    form,
    currentStep,
    isSubmitting,
    nextStep,
    previousStep,
    onSubmit,
  } = useSponsorshipForm();

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
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SponsorInfoStep } from "./steps/SponsorInfoStep";
import { PreferencesStep } from "./steps/PreferencesStep";
import { BrandingStep } from "./steps/BrandingStep";
import { ContributionStep } from "./steps/ContributionStep";
import { AdditionalInfoStep } from "./steps/AdditionalInfoStep";
import { AgreementStep } from "./steps/AgreementStep";
import { useSponsorshipForm } from "./useSponsorshipForm";

const TOTAL_STEPS = 6;
const STEP_TITLES = [
  "Sponsor Information",
  "Preferences",
  "Branding",
  "Contribution",
  "Additional Info",
  "Agreement",
];

export const SponsorshipForm = () => {
  const {
    form,
    currentStep,
    isSubmitting,
    nextStep,
    previousStep,
    onSubmit,
    isStepValid,
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
      <div className="mb-8 space-y-4">
        <Progress value={(currentStep / TOTAL_STEPS) * 100} className="h-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step {currentStep} of {TOTAL_STEPS}</span>
          <span>{STEP_TITLES[currentStep - 1]}</span>
        </div>
      </div>
      
      <Card className="p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={previousStep}
                variant="outline"
                className="w-32"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            
            <div className="flex-1" />
            
            {currentStep < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={nextStep}
                className="w-32"
                disabled={!isStepValid(currentStep)}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || !isStepValid(currentStep)}
                className="w-32"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};
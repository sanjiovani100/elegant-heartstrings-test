import { Card } from "@/components/ui/card";
import { FormProgress } from "./components/FormProgress";
import { FormNavigation } from "./components/FormNavigation";
import { FormStep } from "./components/FormStep";
import { useSponsorshipForm } from "./useSponsorshipForm";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

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

  const [isValidating, setIsValidating] = useState(false);

  const handleNextStep = async () => {
    setIsValidating(true);
    const isValid = await isStepValid(currentStep);
    setIsValidating(false);
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <FormProgress
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        stepTitles={STEP_TITLES}
      />
      
      <Card className="mt-8 p-6 md:p-8 bg-white border border-gray-200 shadow-sm">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormStep currentStep={currentStep} form={form} />
            
            <FormNavigation
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              isSubmitting={isSubmitting}
              isValidating={isValidating}
              onPrevious={previousStep}
              onNext={handleNextStep}
            />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};
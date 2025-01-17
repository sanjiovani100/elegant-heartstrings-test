import { Card } from "@/components/ui/card";
import { FormProgress } from "./components/FormProgress";
import { FormNavigation } from "./components/FormNavigation";
import { FormStep } from "./components/FormStep";
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FormProgress
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        stepTitles={STEP_TITLES}
      />
      
      <Card className="p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormStep currentStep={currentStep} form={form} />
          
          <FormNavigation
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            isSubmitting={isSubmitting}
            isStepValid={isStepValid(currentStep)}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        </form>
      </Card>
    </div>
  );
};
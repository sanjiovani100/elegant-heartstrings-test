import { Progress } from "@/components/ui/progress";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const FormProgress = ({ currentStep, totalSteps, stepTitles }: FormProgressProps) => {
  return (
    <div className="mb-8 space-y-4">
      <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{stepTitles[currentStep - 1]}</span>
      </div>
    </div>
  );
};
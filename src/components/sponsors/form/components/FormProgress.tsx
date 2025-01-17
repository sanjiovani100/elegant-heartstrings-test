import { Progress } from "@/components/ui/progress";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const FormProgress = ({ currentStep, totalSteps, stepTitles }: FormProgressProps) => {
  return (
    <div className="space-y-4">
      <Progress 
        value={(currentStep / totalSteps) * 100} 
        className="h-2 bg-gray-100"
      />
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
        <span className="font-medium text-gray-900">{stepTitles[currentStep - 1]}</span>
      </div>
    </div>
  );
};
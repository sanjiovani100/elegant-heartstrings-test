import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  isStepValid: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit?: () => void;
}

export const FormNavigation = ({
  currentStep,
  totalSteps,
  isSubmitting,
  isStepValid,
  onPrevious,
  onNext,
  onSubmit,
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 && (
        <Button
          type="button"
          onClick={onPrevious}
          variant="outline"
          className="w-32"
          disabled={isSubmitting}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
      )}
      
      <div className="flex-1" />
      
      {currentStep < totalSteps ? (
        <Button
          type="button"
          onClick={onNext}
          className="w-32"
          disabled={isSubmitting || !isStepValid}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          type="submit"
          disabled={isSubmitting || !isStepValid}
          className="w-32"
          onClick={onSubmit}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      )}
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  isValidating: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit?: () => void;
}

export const FormNavigation = ({
  currentStep,
  totalSteps,
  isSubmitting,
  isValidating,
  onPrevious,
  onNext,
  onSubmit,
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
      {currentStep > 1 && (
        <Button
          type="button"
          onClick={onPrevious}
          variant="outline"
          className="w-32 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          disabled={isSubmitting || isValidating}
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
          className="w-32 bg-fashionista-red hover:bg-fashionista-red/90 text-white"
          disabled={isSubmitting || isValidating}
        >
          {isValidating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Validating...
            </>
          ) : (
            <>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      ) : (
        <Button
          type="submit"
          disabled={isSubmitting || isValidating}
          className="w-32 bg-fashionista-red hover:bg-fashionista-red/90 text-white"
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
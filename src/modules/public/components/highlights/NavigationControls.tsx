import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavigationControlsProps } from "./types";

const NavigationControls = ({ 
  onPrevious, 
  onNext, 
  activeIndex,
  total
}: NavigationControlsProps) => {
  return (
    <div className="hidden md:flex justify-between items-center absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10 pointer-events-none">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-fashionista-grey/20 hover:bg-fashionista-grey/40 text-white pointer-events-auto"
        onClick={onPrevious}
        disabled={activeIndex === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-fashionista-grey/20 hover:bg-fashionista-grey/40 text-white pointer-events-auto"
        onClick={onNext}
        disabled={activeIndex === total - 1}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default NavigationControls;
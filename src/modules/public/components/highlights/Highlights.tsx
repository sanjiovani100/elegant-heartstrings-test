import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import HighlightCard from "./HighlightCard";
import NavigationControls from "./NavigationControls";
import Pagination from "./Pagination";
import { HighlightsProps } from "./types";
import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";

const Highlights = ({ 
  title = "Event Highlights", 
  subtitle, 
  items = [], 
  className = "",
  testId = "highlights-section"
}: HighlightsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToCard = (index: number) => {
    try {
      if (containerRef.current) {
        const card = containerRef.current.children[index] as HTMLElement;
        card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
      setActiveIndex(index);
    } catch (error) {
      toast({
        title: "Navigation Error",
        description: "Failed to navigate to the selected highlight.",
        variant: "destructive"
      });
      console.error("Highlights navigation error:", error);
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(activeIndex + 1, items.length - 1);
    scrollToCard(newIndex);
  };

  return (
    <ErrorBoundary>
      <section 
        className={`relative py-20 overflow-hidden bg-gradient-to-b from-black via-black/90 to-fashionista-red/20 ${className}`}
        data-testid={testId}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-montserrat text-white text-center mb-4 animate-fade-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#F0F0F0] text-center mb-12 max-w-2xl mx-auto animate-fade-up font-montserrat">
              {subtitle}
            </p>
          )}

          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-testid={`${testId}-grid`}
          >
            {items.map((highlight, index) => (
              <HighlightCard
                key={highlight.title}
                {...highlight}
                isLoading={isLoading}
                onLearnMore={() => {
                  setIsLoading(true);
                  // Simulate loading state
                  setTimeout(() => setIsLoading(false), 1000);
                }}
                testId={`${testId}-card-${index}`}
              />
            ))}
          </div>

          <NavigationControls 
            onPrevious={handlePrevious} 
            onNext={handleNext} 
            activeIndex={activeIndex}
            total={items.length}
            disabled={isLoading}
            testId={`${testId}-nav`}
          />
          <Pagination 
            activeIndex={activeIndex}
            total={items.length}
            onSelect={scrollToCard}
            testId={`${testId}-pagination`}
          />
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Highlights;
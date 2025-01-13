import { useState, useRef } from "react";
import HighlightCard from "./highlights/HighlightCard";
import NavigationControls from "./highlights/NavigationControls";
import Pagination from "./highlights/Pagination";

const highlights = [
  {
    title: "Runway Collection",
    description: "Experience our exclusive Valentine's collection featuring elegant evening wear and haute couture designs.",
    image: "/lovable-uploads/356fce11-fc3c-49c5-aa17-53b584a0bcf8.png"
  },
  {
    title: "Luxury Lingerie",
    description: "Discover our curated selection of premium silk and satin pieces in romantic blush tones.",
    image: "/lovable-uploads/9d7f93fc-b3ee-4a60-8e66-a7dd53721a75.png"
  },
  {
    title: "Backstage Glamour",
    description: "Get a glimpse of the behind-the-scenes magic and artistic preparation.",
    image: "/lovable-uploads/520b431f-8c25-4a32-bb07-94ff7f89d575.png"
  }
];

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const card = containerRef.current.children[index] as HTMLElement;
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(activeIndex + 1, highlights.length - 1);
    scrollToCard(newIndex);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-black/90 to-fashionista-red/20">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-white text-center mb-4 animate-fade-up">
          Event Highlights
        </h2>
        <p className="text-lg text-fashionista-pink text-center mb-12 max-w-2xl mx-auto animate-fade-up font-montserrat">
          Discover the enchanting moments awaiting you
        </p>

        <NavigationControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          isFirstSlide={activeIndex === 0}
          isLastSlide={activeIndex === highlights.length - 1}
        />

        <div 
          ref={containerRef}
          className="flex gap-8 md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible pb-12 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              {...highlight}
            />
          ))}
        </div>

        <Pagination
          total={highlights.length}
          active={activeIndex}
          onSelect={scrollToCard}
        />
      </div>
    </section>
  );
};

export default Highlights;
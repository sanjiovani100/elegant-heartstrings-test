import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const highlights = [
  {
    title: "Runway Highlights",
    description: "Experience the glamour of haute couture lingerie on the catwalk.",
    image: "/hero1.jpg"
  },
  {
    title: "Live Performances",
    description: "Immerse yourself in mesmerizing live music and artistic shows.",
    image: "/hero2.jpg"
  },
  {
    title: "Venue Ambiance",
    description: "Discover our romantic setting with dramatic lighting and elegant décor.",
    image: "/hero3.jpg"
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
      {/* Floating Hearts Background */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-fashionista-grey/20 hover:bg-fashionista-grey/40 text-white pointer-events-auto"
            onClick={handlePrevious}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-fashionista-grey/20 hover:bg-fashionista-grey/40 text-white pointer-events-auto"
            onClick={handleNext}
            disabled={activeIndex === highlights.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="flex gap-8 md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible pb-8 md:pb-0"
        >
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="min-w-[300px] md:min-w-0 bg-black/50 border border-fashionista-grey/20 overflow-hidden group transition-all duration-300 hover:shadow-glow snap-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[70%] overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6 h-[30%] relative">
                <h3 className="text-2xl font-playfair text-white mb-2 group-hover:text-fashionista-pink transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 font-montserrat">
                  {highlight.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-grey/20 hover:text-white transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-fashionista-pink w-4" 
                  : "bg-fashionista-grey/40 hover:bg-fashionista-grey/60"
              }`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
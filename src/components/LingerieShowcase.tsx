import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import NavigationControls from "@/components/highlights/NavigationControls";
import Pagination from "@/components/highlights/Pagination";
import LingeriePiece from "./LingeriePiece";
import { useState } from "react";

const showcaseItems = [
  {
    image: "/placeholder.svg", // Replace with actual image paths
    title: "Midnight Romance Collection",
    designer: "By Isabella Laurent",
    description: "Exquisite lace detailing with pearl embellishments, perfect for a romantic evening.",
    favorites: 2.5,
    isTrending: true,
  },
  {
    image: "/placeholder.svg",
    title: "Rose Petal Dreams",
    designer: "By Sofia Elegance",
    description: "Delicate silk and satin blend with rose gold accents.",
    favorites: 1.8,
  },
  {
    image: "/placeholder.svg",
    title: "Enchanted Evening",
    designer: "By Valentina Grace",
    description: "Premium Italian lace with crystal embellishments.",
    favorites: 3.2,
    isTrending: true,
  },
  {
    image: "/placeholder.svg",
    title: "Moonlight Whispers",
    designer: "By Luna Noir",
    description: "Sheer elegance meets modern sophistication.",
    favorites: 2.1,
  },
  {
    image: "/placeholder.svg",
    title: "Velvet Dreams",
    designer: "By Aurora Belle",
    description: "Luxurious velvet and lace combination for unforgettable moments.",
    favorites: 1.9,
  },
];

const LingerieShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : showcaseItems.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < showcaseItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-fashionista-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat text-white">
          Exclusive Collection
        </h2>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
                  <LingeriePiece {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <NavigationControls
            onPrevious={handlePrevious}
            onNext={handleNext}
            isFirstSlide={currentSlide === 0}
            isLastSlide={currentSlide === showcaseItems.length - 1}
          />
        </div>

        <Pagination
          total={showcaseItems.length}
          active={currentSlide}
          onSelect={setCurrentSlide}
        />
      </div>
    </section>
  );
};

export default LingerieShowcase;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LingeriePiece from "./LingeriePiece";
import { useState } from "react";

const showcaseItems = [
  {
    image: "/lovable-uploads/4aeca21e-741d-434b-8ce7-a57b4a6402e2.png",
    title: "Midnight Lace Collection",
    designer: "By Noir Elegance",
    description: "Exquisite black lace design with intricate detailing, perfect for a romantic evening.",
  },
  {
    image: "/lovable-uploads/21a4cbc2-da88-4b3b-906e-b622ffb567f9.png",
    title: "Shadow & Light",
    designer: "By Luna Noir",
    description: "Contemporary silhouette with classic black lace and modern styling.",
  },
  {
    image: "/lovable-uploads/3114b336-2a67-4d77-98bd-165c2c6145e4.png",
    title: "Pink Glamour",
    designer: "By Rose Atelier",
    description: "Delicate lace bralette with strappy details and romantic aesthetic.",
  },
];

const LingerieShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-fashionista-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-montserrat text-center mb-12 text-white">
          Exclusive Collection
        </h2>

        <div className="relative">
          <Carousel 
            className="w-full"
            opts={{
              loop: true,
              dragFree: false,
              skipSnaps: false,
              align: "start",
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <LingeriePiece {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LingerieShowcase;
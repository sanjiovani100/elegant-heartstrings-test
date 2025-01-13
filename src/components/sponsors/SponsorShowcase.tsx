import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const sponsors = [
  {
    name: "Luxury Lingerie Co",
    logo: "/sponsor1.jpg",
    url: "https://example.com/sponsor1",
    featured: true
  },
  {
    name: "Fashion House",
    logo: "/sponsor2.jpg",
    url: "https://example.com/sponsor2"
  },
  {
    name: "Style Magazine",
    logo: "/sponsor3.jpg",
    url: "https://example.com/sponsor3"
  },
  {
    name: "Beauty Brand",
    logo: "/sponsor4.jpg",
    url: "https://example.com/sponsor4"
  }
];

const SponsorShowcase = () => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-[#2B0000]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair text-white mb-4">
            Our Esteemed Sponsors
          </h2>
          <p className="text-lg text-fashionista-pink font-montserrat">
            Celebrating elegance with our valued partners
          </p>
        </div>

        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto mb-8"
          >
            <CarouselContent>
              {sponsors.map((sponsor, index) => (
                <CarouselItem key={index} className="basis-full">
                  <SponsorLogo {...sponsor} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {sponsors.map((sponsor, index) => (
              <SponsorLogo
                key={index}
                {...sponsor}
                className={cn(
                  "opacity-0 animate-fade-up",
                  { "animation-delay-100": index === 0 },
                  { "animation-delay-200": index === 1 },
                  { "animation-delay-300": index === 2 },
                  { "animation-delay-400": index === 3 }
                )}
              />
            ))}
          </div>
        )}

        <div className="text-center opacity-0 animate-fade-up animation-delay-500">
          <Button
            variant="secondary"
            className="bg-[#F0F0F0] text-black hover:bg-gray-200 transition-colors duration-300"
            onClick={() => window.location.href = "/become-sponsor"}
          >
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

interface SponsorLogoProps {
  name: string;
  logo: string;
  url: string;
  featured?: boolean;
  className?: string;
}

const SponsorLogo = ({ name, logo, url, featured, className }: SponsorLogoProps) => {
  return (
    <div 
      className={cn(
        "group cursor-pointer transition-all duration-300",
        "hover:scale-105",
        featured ? "col-span-2" : "",
        className
      )}
      onClick={() => window.open(url, '_blank')}
    >
      <div className={cn(
        "bg-black/50 p-6 rounded-lg",
        "transition-all duration-300",
        "hover:shadow-glow",
        "flex items-center justify-center",
        "aspect-square w-full" // Ensures uniform dimensions
      )}>
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SponsorShowcase;
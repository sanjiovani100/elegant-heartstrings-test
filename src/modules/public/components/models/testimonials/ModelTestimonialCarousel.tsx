import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Model",
    quote: "Fashionistas was a turning point in my career. The exposure and connections I made were invaluable.",
    image: "/hero1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Emerging Model",
    quote: "The professional environment and guidance helped me build confidence and improve my runway walk.",
    image: "/hero2.jpg"
  },
  {
    name: "Isabella Martinez",
    role: "Agency-Signed Model",
    quote: "This event opened doors to amazing opportunities. I'm now working with top designers in the industry.",
    image: "/hero3.jpg"
  },
];

const ModelTestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-white/5 p-6 h-full">
              <div className="flex flex-col h-full">
                <MessageSquare className="w-8 h-8 text-fashionista-red mb-4" />
                <blockquote className="flex-grow mb-4 text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <div className="font-montserrat">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ModelTestimonialCarousel;
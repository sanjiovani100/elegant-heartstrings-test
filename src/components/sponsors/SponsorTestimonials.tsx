import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Partnering with Fashionistas was a game-changer for our brand visibility in the luxury market.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Luxury Brand Co."
  },
  {
    quote: "The event exceeded our expectations. The ROI from this sponsorship was remarkable.",
    author: "Michael Chen",
    role: "Brand Manager",
    company: "Fashion House International"
  },
  {
    quote: "Exceptional organization and premium audience engagement. We'll definitely sponsor again.",
    author: "Emma Rodriguez",
    role: "CEO",
    company: "Style Innovations"
  }
];

const SponsorTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-fashionista-red/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          What Our Sponsors Say
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="bg-black/50 p-8 rounded-lg border border-fashionista-red/20">
                  <blockquote className="space-y-4">
                    <p className="text-lg text-gray-200 italic">"{testimonial.quote}"</p>
                    <footer className="mt-4">
                      <p className="text-fashionista-red font-montserrat">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SponsorTestimonials;
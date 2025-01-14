import { Button } from "@/components/ui/button";

const EventHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url(/hero2.jpg)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 animate-fade-up drop-shadow-lg">
            Discover the Elegance of Fashionistas Valentine's Event
          </h1>

          <p className="text-xl md:text-2xl text-[#F0F0F0] mb-8 animate-fade-up delay-100 font-inter">
            Explore the most luxurious fashion shows, venues, and galleries
          </p>

          <div className="space-x-6 animate-fade-up delay-200">
            <Button 
              size="lg" 
              className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-8 py-6 text-lg"
            >
              View Upcoming Events
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#F0F0F0] text-black hover:bg-white px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
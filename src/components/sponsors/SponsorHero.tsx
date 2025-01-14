import { Button } from "@/components/ui/button";

const SponsorHero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/353c7c99-abfc-4cb6-8c71-febb2f53f43e.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair leading-tight animate-fade-up">
            Partner with Us for an Unforgettable Fashion Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-inter animate-fade-up delay-100">
            Showcase your brand to an exclusive audience of fashion industry leaders and influencers
          </p>
          <div className="space-x-4 animate-fade-up delay-200">
            <Button 
              size="lg"
              className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-8 py-6"
            >
              Become a Sponsor
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorHero;
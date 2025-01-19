import { Button } from "@/components/ui/button";

const DesignerHero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/c073624c-5bbf-4b28-a98a-e16d7aa2b8cf.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat leading-tight animate-fade-up">
            Showcase Your Vision on the Ultimate Stage
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-inter animate-fade-up delay-100">
            Join the Fashionistas Valentine's Event to connect with industry leaders, media, and fashion enthusiasts
          </p>
          <div className="space-x-4 animate-fade-up delay-200">
            <Button 
              size="lg"
              variant="gradient"
              className="text-white px-8 py-6"
            >
              Apply as a Designer
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 px-8 py-6"
            >
              Learn More About the Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerHero;
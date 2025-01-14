import { Button } from "@/components/ui/button";

const TicketHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/c073624c-5bbf-4b28-a98a-e16d7aa2b8cf.png"
          alt="Glamorous event venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-up">
          Secure Your Spot for Fashionistas Valentine's Event!
        </h1>
        <p className="font-montserrat text-xl md:text-2xl text-[#F0F0F0] mb-8 animate-fade-up opacity-90">
          Choose your experience – General Admission or VIP
        </p>
        <Button 
          className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-up"
          onClick={() => document.getElementById('ticket-tiers')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Tickets
        </Button>
      </div>
    </section>
  );
};

export default TicketHero;
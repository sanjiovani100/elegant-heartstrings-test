import { Button } from "@/components/ui/button";

const TicketHero = () => {
  return (
    <section className="ticket-hero">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
          Secure Your Spot for Fashionistas Valentine's Event!
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up">
          Choose your experience – General Admission or VIP
        </p>
        <Button 
          size="lg"
          className="bg-fashionista-red hover:bg-fashionista-red/90 text-white text-lg px-8 py-6 transition-transform hover:scale-105"
          onClick={() => document.getElementById('ticket-tiers')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Tickets
        </Button>
      </div>
    </section>
  );
};

export default TicketHero;
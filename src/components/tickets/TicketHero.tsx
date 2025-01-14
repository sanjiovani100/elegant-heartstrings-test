import { Button } from "@/components/ui/button";

const TicketHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white">
            Secure Your Spot for Fashionistas Valentine's Event!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-inter">
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
      </div>
    </section>
  );
};

export default TicketHero;
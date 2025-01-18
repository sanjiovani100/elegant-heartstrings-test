import TicketHero from "@/components/tickets/TicketHero";
import TicketTiers from "@/components/tickets/TicketTiers";
import CheckoutProcess from "@/components/tickets/CheckoutProcess";
import FAQSection from "@/components/tickets/FAQSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const TicketsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black">
      <TicketHero />
      <TicketTiers />
      <CheckoutProcess />
      <FAQSection />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black border-t border-white/10 shadow-lg md:hidden z-50">
        <Button 
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white"
          onClick={() => document.getElementById('ticket-tiers')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Tickets
        </Button>
      </div>

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-20 right-4 bg-black/50 backdrop-blur-sm border-white/10 text-white hover:bg-white/20 transition-opacity duration-300 md:bottom-4 z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TicketsPage;
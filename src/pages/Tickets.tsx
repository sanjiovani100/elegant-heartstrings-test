import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import TicketHero from "@/components/tickets/TicketHero";
import TicketTiers from "@/components/tickets/TicketTiers";
import CheckoutProcess from "@/components/tickets/CheckoutProcess";
import TrustIndicators from "@/components/tickets/TrustIndicators";
import EventHighlights from "@/components/tickets/EventHighlights";
import FAQSection from "@/components/tickets/FAQSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Tickets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-fashionista-red/5">
      <Navbar />
      <TicketHero />
      <TicketTiers />
      <TrustIndicators />
      <EventHighlights />
      <CheckoutProcess />
      <FAQSection />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 border-t border-fashionista-red/20 backdrop-blur md:hidden">
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
        className={`fixed bottom-20 right-4 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 hover:border-white/30 transition-opacity duration-300 md:bottom-4 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4 text-white" />
      </Button>
      
      <Footer />
    </main>
  );
};

export default Tickets;
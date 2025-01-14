import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import TicketHero from "@/components/tickets/TicketHero";
import TicketTiers from "@/components/tickets/TicketTiers";
import BenefitsSection from "@/components/tickets/BenefitsSection";
import PricingAvailability from "@/components/tickets/PricingAvailability";
import ProcessSteps from "@/components/process/ProcessSteps";
import CheckoutProcess from "@/components/tickets/CheckoutProcess";
import TicketFAQ from "@/components/tickets/TicketFAQ";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Tickets = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <TicketHero />
      <TicketTiers />
      <BenefitsSection />
      <PricingAvailability />
      <ProcessSteps
        title="How to Purchase Tickets"
        steps={[
          {
            title: "Select Your Experience",
            description: "Choose General Admission or VIP access.",
            icon: "Ticket"
          },
          {
            title: "Add Your Details",
            description: "Provide attendee information for a seamless experience.",
            icon: "Form"
          },
          {
            title: "Secure Payment",
            description: "Use Stripe for secure payments. Instant confirmation included.",
            icon: "CreditCard"
          }
        ]}
      />
      <CheckoutProcess />
      <TicketFAQ />
      <Footer />
      
      {/* Sticky CTA for mobile */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm border-t border-fashionista-grey/20 md:hidden z-50">
          <Button 
            className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Tickets
          </Button>
        </div>
      )}
    </main>
  );
};

export default Tickets;
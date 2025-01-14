import { Heart } from "lucide-react";
import { TicketCard } from "./TicketCard";
import CountdownTimer from "./CountdownTimer";

const ticketOptions = [
  {
    title: "General Admission",
    price: 99,
    perks: [
      { text: "Standard seating", included: true },
      { text: "Welcome drink", included: true },
      { text: "Event program", included: true },
      { text: "VIP access", included: false },
      { text: "After-party entry", included: false },
    ],
    availability: "Limited Tickets Remaining",
  },
  {
    title: "VIP Experience",
    price: 249,
    perks: [
      { text: "Front-row seating", included: true },
      { text: "Welcome champagne", included: true },
      { text: "Event program", included: true },
      { text: "VIP access", included: true },
      { text: "After-party entry", included: true },
    ],
    isPopular: true,
    availability: "Only 20 VIP Tickets Left",
  },
  {
    title: "Sponsor Package",
    price: 499,
    perks: [
      { text: "Premium seating", included: true },
      { text: "Unlimited premium drinks", included: true },
      { text: "Event program", included: true },
      { text: "VIP access", included: true },
      { text: "Private after-party suite", included: true },
    ],
    availability: "5 Exclusive Spots Left",
  },
];

const Tickets = () => {
  return (
    <section className="py-8 overflow-hidden" id="tickets">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-fashionista-pink/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-montserrat text-white mb-4">
            Choose Your Perfect Ticket
          </h2>
          <p className="text-white/90 font-montserrat mb-3">
            Reserve your spot for Medellín's most glamorous night!
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Join 100 attendees who've already booked!
          </p>
          
          <div className="mb-12">
            <CountdownTimer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ticketOptions.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Secure Checkout • Verified by Stripe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
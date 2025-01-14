import TicketCard from "./TicketCard";

const ticketTiers = [
  {
    title: "General Admission",
    description: "Access to all activities and general seating",
    price: 75,
    perks: [
      { text: "Standard seating", included: true },
      { text: "Welcome drink", included: true },
      { text: "Event program", included: true },
      { text: "Access to main showcase", included: true },
      { text: "Networking opportunities", included: true }
    ],
    isVip: false,
    availability: "Limited Tickets Remaining"
  },
  {
    title: "VIP Experience",
    description: "Exclusive front-row seating, complimentary drinks, and backstage access",
    price: 200,
    perks: [
      { text: "Front-row seating", included: true },
      { text: "Unlimited premium drinks", included: true },
      { text: "VIP lounge access", included: true },
      { text: "Backstage tour", included: true },
      { text: "Meet & greet with designers", included: true }
    ],
    isVip: true,
    availability: "Only 20 VIP Tickets Left"
  }
];

const TicketTiers = () => {
  return (
    <section id="ticket-tiers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-white text-center mb-16">
          Choose Your Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <TicketCard
              key={index}
              {...tier}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketTiers;
import TicketCard from "./TicketCard";

const ticketTiers = [
  {
    title: "General Admission",
    description: "Access to all activities and general seating",
    price: 75,
    features: [
      "Standard seating",
      "Welcome drink",
      "Event program",
      "Access to main showcase",
      "Networking opportunities"
    ],
    isVip: false,
    availability: "Limited Tickets Remaining"
  },
  {
    title: "VIP Experience",
    description: "Exclusive front-row seating, complimentary drinks, and backstage access",
    price: 200,
    features: [
      "Front-row seating",
      "Unlimited premium drinks",
      "VIP lounge access",
      "Backstage tour",
      "Meet & greet with designers"
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
import { TicketCard } from "@/components/tickets/TicketCard";

const TicketTiers = () => {
  const tiers = [
    {
      title: "General Admission",
      price: 149,
      description: "Experience the glamour of Fashionistas Valentine's Event",
      features: [
        "Access to all fashion shows",
        "Standard seating",
        "Event program",
        "Access to general networking areas"
      ],
      isVip: false,
      availability: "Limited seats available"
    },
    {
      title: "VIP Experience",
      price: 299,
      description: "Elevate your evening with exclusive VIP benefits",
      features: [
        "Premium front-row seating",
        "Complimentary drinks",
        "VIP lounge access",
        "Meet & Greet with designers",
        "Exclusive gift bag",
        "Priority check-in"
      ],
      isVip: true,
      availability: "Very limited availability"
    }
  ];

  return (
    <section id="ticket-tiers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
          Choose Your Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <TicketCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketTiers;
import HighlightCard from "@/components/cards/HighlightCard";

const sponsorshipLevels = [
  {
    title: "Gold Sponsor",
    description: "Premium visibility, VIP access, and exclusive branding opportunities throughout the event.",
    image: "/lovable-uploads/10ac5800-7327-473c-bfd1-2a77ddb82412.png"
  },
  {
    title: "Silver Sponsor",
    description: "Enhanced visibility and networking opportunities with key industry players.",
    image: "/lovable-uploads/21a4cbc2-da88-4b3b-906e-b622ffb567f9.png"
  },
  {
    title: "Bronze Sponsor",
    description: "Brand presence and networking opportunities at our exclusive fashion event.",
    image: "/lovable-uploads/3114b336-2a67-4d77-98bd-165c2c6145e4.png"
  }
];

const SponsorLevels = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-black/90 to-fashionista-red/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-montserrat text-white text-center mb-4 animate-fade-up">
          Sponsorship Levels
        </h2>
        <p className="text-lg text-[#F0F0F0] text-center mb-12 max-w-2xl mx-auto animate-fade-up font-montserrat">
          Choose the perfect sponsorship package for your brand
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorshipLevels.map((level, index) => (
            <HighlightCard
              key={level.title}
              {...level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorLevels;
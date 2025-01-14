import { useState } from "react";

const sponsors = [
  {
    name: "Luxury Brand Co",
    logo: "/lovable-uploads/10ac5800-7327-473c-bfd1-2a77ddb82412.png",
    url: "#"
  },
  {
    name: "Fashion House",
    logo: "/lovable-uploads/21a4cbc2-da88-4b3b-906e-b622ffb567f9.png",
    url: "#"
  },
  {
    name: "Style Innovations",
    logo: "/lovable-uploads/3114b336-2a67-4d77-98bd-165c2c6145e4.png",
    url: "#"
  }
];

const SponsorGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Our Past Sponsors
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              className="group relative block aspect-square bg-black/50 rounded-lg overflow-hidden border border-fashionista-red/20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className={`w-full h-full object-contain p-8 transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6`}>
                <span className="text-white font-montserrat text-center">
                  {sponsor.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorGallery;
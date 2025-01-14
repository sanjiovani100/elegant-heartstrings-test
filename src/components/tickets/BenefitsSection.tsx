import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Exclusive Networking",
    description: "Meet industry leaders, influencers, and designers",
    image: "/lovable-uploads/520b431f-8c25-4a32-bb07-94ff7f89d575.png"
  },
  {
    title: "First-Look Collections",
    description: "Be among the first to witness cutting-edge fashion",
    image: "/lovable-uploads/353c7c99-abfc-4cb6-8c71-febb2f53f43e.png"
  },
  {
    title: "Luxurious Experience",
    description: "Enjoy complimentary drinks, front-row seats, and backstage access",
    image: "/lovable-uploads/4aeca21e-741d-434b-8ce7-a57b4a6402e2.png"
  }
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-white text-center mb-16">
          Benefits of Attending
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden group transition-all duration-300 hover:shadow-glow bg-black/50 border-fashionista-grey/20 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-square">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-playfair text-2xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-[#F0F0F0] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
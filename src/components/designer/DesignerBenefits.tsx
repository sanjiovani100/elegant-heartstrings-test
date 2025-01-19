import HighlightCard from "@/modules/public/components/highlights/HighlightCard";

const benefits = [
  {
    title: "Industry Exposure",
    description: "Showcase your collection to industry leaders, buyers, and fashion media at one of Medellín's most prestigious events.",
    image: "/lovable-uploads/520b431f-8c25-4a32-bb07-94ff7f89d575.png"
  },
  {
    title: "Media Coverage",
    description: "Gain extensive media coverage through our partnerships with leading fashion publications and social media influencers.",
    image: "/lovable-uploads/356fce11-fc3c-49c5-aa17-53b584a0bcf8.png"
  },
  {
    title: "Networking",
    description: "Connect with fellow designers, models, and industry professionals in an intimate and exclusive setting.",
    image: "/lovable-uploads/4aeca21e-741d-434b-8ce7-a57b4a6402e2.png"
  }
];

const DesignerBenefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
          Why Participate as a Designer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <HighlightCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerBenefits;
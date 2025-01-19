import { Star, Camera, Users } from "lucide-react";
import HighlightCard from "@/modules/public/components/highlights/HighlightCard";

const ModelBenefits = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-fashionista-red" />,
      title: "Industry Exposure",
      description: "Connect with top designers, brands, and industry leaders.",
      image: "/lovable-uploads/c073624c-5bbf-4b28-a98a-e16d7aa2b8cf.png"
    },
    {
      icon: <Camera className="w-8 h-8 text-fashionista-red" />,
      title: "Professional Portfolio",
      description: "Get professional runway and photoshoot opportunities.",
      image: "/lovable-uploads/5e0ecc00-218e-40df-9160-ea06d3a9627c.png"
    },
    {
      icon: <Users className="w-8 h-8 text-fashionista-red" />,
      title: "Networking",
      description: "Build valuable connections within the fashion industry.",
      image: "/lovable-uploads/a957025d-25d4-4b39-9e9f-15c9f20394c6.png"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
          Why Join as a Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default ModelBenefits;
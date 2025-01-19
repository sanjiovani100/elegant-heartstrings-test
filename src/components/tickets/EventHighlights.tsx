import { Calendar, MapPin, Users, Star, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventHighlights = () => {
  const highlights = [
    {
      image: "/hero1.jpg",
      title: "Runway Shows",
      description: "Experience the latest collections from top designers",
      badges: ["VIP Access", "Front Row"]
    },
    {
      image: "/hero2.jpg",
      title: "Networking",
      description: "Connect with industry professionals and influencers",
      badges: ["Exclusive", "Industry Leaders"]
    },
    {
      image: "/hero3.jpg",
      title: "After Party",
      description: "Celebrate in style with live performances",
      badges: ["Live Music", "Open Bar"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-4">
          Event Highlights
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Immerse yourself in the world of fashion with our carefully curated experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-black/50 border-white/10 hover:border-fashionista-red/30 transition-all duration-500"
            >
              <div className="relative h-48">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-montserrat text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {highlight.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlight.badges.map((badge, badgeIndex) => (
                    <Badge 
                      key={badgeIndex}
                      variant="secondary"
                      className="bg-fashionista-pink text-white"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
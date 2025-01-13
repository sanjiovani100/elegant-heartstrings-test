import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Heart, Award, Users, Camera, PartyPopper } from "lucide-react";

const highlights = [
  {
    title: "Lingerie Collections",
    description: "Discover exquisite designs that define modern elegance and romance.",
    icon: Heart,
    image: "/hero1.jpg"
  },
  {
    title: "Live Performances",
    description: "Experience mesmerizing live music and artistic performances throughout the night.",
    icon: Music,
    image: "/hero2.jpg"
  },
  {
    title: "VIP Experience",
    description: "Indulge in premium packages with exclusive access and luxury perks.",
    icon: Award,
    image: "/hero3.jpg"
  },
  {
    title: "Networking",
    description: "Connect with industry professionals and fashion enthusiasts.",
    icon: Users,
    image: "/hero1.jpg"
  },
  {
    title: "Venue Ambiance",
    description: "Immerse yourself in a romantic atmosphere with dramatic lighting and elegant décor.",
    icon: Camera,
    image: "/hero2.jpg"
  },
  {
    title: "After Party",
    description: "Continue the celebration with an exclusive after-party experience.",
    icon: PartyPopper,
    image: "/hero3.jpg"
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative py-20 bg-gradient-to-b from-black to-fashionista-red/20 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-white text-center mb-4 animate-fade-up">
          Event Highlights
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          Experience an unforgettable evening of fashion, music, and luxury
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="group bg-black/50 border border-fashionista-grey/20 overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center gap-2 mb-3">
                  <highlight.icon className="w-5 h-5 text-fashionista-pink" />
                  <h3 className="text-xl font-playfair text-white">{highlight.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{highlight.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-grey/20 hover:text-white transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
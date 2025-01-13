import { Card } from "@/components/ui/card";

const highlights = [
  {
    title: "Exclusive Collections",
    description: "Experience the latest in luxury lingerie from world-renowned designers.",
    icon: "👗",
  },
  {
    title: "Live Performances",
    description: "Enjoy mesmerizing live music and artistic performances throughout the night.",
    icon: "🎭",
  },
  {
    title: "VIP Experience",
    description: "Indulge in our premium VIP packages with exclusive access and perks.",
    icon: "✨",
  },
  {
    title: "Networking",
    description: "Connect with industry professionals and fashion enthusiasts.",
    icon: "🤝",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-white text-center mb-12">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="bg-black/50 border border-fashionista-grey/20 p-6 card-hover">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-playfair text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
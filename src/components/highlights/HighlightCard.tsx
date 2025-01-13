import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HighlightCardProps {
  title: string;
  description: string;
  image: string;
}

const HighlightCard = ({ title, description, image }: HighlightCardProps) => {
  return (
    <Card 
      className="min-w-[300px] md:min-w-0 bg-black/50 border border-fashionista-grey/20 overflow-hidden group transition-all duration-300 hover:shadow-glow snap-center animate-fade-up"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-2xl font-playfair text-white mb-2 group-hover:text-fashionista-pink transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 font-montserrat opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <Button 
            variant="outline" 
            className="w-full bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-grey/20 hover:text-white transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HighlightCard;
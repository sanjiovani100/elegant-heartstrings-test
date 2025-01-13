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
      <div className="relative h-[70%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6 h-[30%] relative">
        <h3 className="text-2xl font-playfair text-white mb-2 group-hover:text-fashionista-pink transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 font-montserrat">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-grey/20 hover:text-white transition-colors duration-300"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default HighlightCard;
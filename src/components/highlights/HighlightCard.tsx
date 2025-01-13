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
      className="bg-black/50 border border-fashionista-grey/20 overflow-hidden group transition-all duration-300 hover:shadow-glow animate-fade-up aspect-square"
    >
      <div className="relative h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="font-playfair text-2xl text-white mb-3 group-hover:text-[#F0F0F0] transition-colors">
            {title}
          </h3>
          <p className="font-montserrat text-[#F0F0F0] text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <Button 
            variant="outline" 
            className="w-full bg-[#F0F0F0] hover:bg-white text-black transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HighlightCard;
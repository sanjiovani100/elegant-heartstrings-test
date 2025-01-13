import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Perk {
  text: string;
  included: boolean;
}

interface TicketCardProps {
  title: string;
  price: number;
  perks: Perk[];
  isPopular?: boolean;
  availability?: string;
}

const TicketCard = ({ title, price, perks, isPopular, availability }: TicketCardProps) => {
  return (
    <Card className="relative w-full max-w-sm bg-black/50 border border-fashionista-grey/20 p-6 transition-all duration-300 hover:shadow-glow group animate-fade-up">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fashionista-red px-4 py-1 rounded-full text-sm font-montserrat text-white">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-playfair text-white mb-4">{title}</h3>
      
      <div className="text-4xl font-montserrat font-bold text-fashionista-pink mb-6">
        ${price}
      </div>
      
      <ul className="space-y-3 mb-6">
        {perks.map((perk, index) => (
          <li 
            key={index} 
            className={`flex items-center gap-2 text-sm ${
              perk.included ? 'text-white' : 'text-fashionista-grey line-through'
            }`}
          >
            <Check 
              className={`w-4 h-4 ${
                perk.included ? 'text-fashionista-pink' : 'text-fashionista-grey'
              }`} 
            />
            {perk.text}
          </li>
        ))}
      </ul>
      
      <div className="space-y-3">
        <Button 
          className="w-full bg-fashionista-pink hover:bg-fashionista-grey transition-colors duration-300"
        >
          Buy Now
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-fashionista-red text-fashionista-red hover:bg-fashionista-red/10"
        >
          Learn More
        </Button>
      </div>
      
      {availability && (
        <p className="mt-4 text-xs text-fashionista-grey uppercase tracking-wider text-center">
          {availability}
        </p>
      )}
    </Card>
  );
};

export default TicketCard;
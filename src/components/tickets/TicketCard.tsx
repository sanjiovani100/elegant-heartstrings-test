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
    <Card className="relative w-full max-w-sm mx-auto bg-black/30 border-0 p-6 transition-all duration-300 hover:shadow-glow group animate-fade-up">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fashionista-red px-4 py-1 rounded-full text-sm font-montserrat text-white">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-playfair text-white mb-4">{title}</h3>
      
      <div className="text-4xl font-montserrat font-bold text-white mb-6">
        ${price}
      </div>
      
      <ul className="space-y-3 mb-6">
        {perks.map((perk, index) => (
          <li 
            key={index} 
            className={`flex items-center gap-2 text-sm ${
              perk.included ? 'text-white' : 'text-gray-500 line-through'
            }`}
          >
            <Check 
              className={`w-4 h-4 ${
                perk.included ? 'text-fashionista-red' : 'text-gray-500'
              }`} 
            />
            {perk.text}
          </li>
        ))}
      </ul>
      
      <div className="space-y-3">
        <Button 
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white transition-all duration-300"
        >
          Reserve Now
        </Button>
        <Button 
          variant="secondary"
          className="w-full bg-[#f0f0f0] hover:bg-[#e0e0e0] text-black transition-all duration-300"
        >
          Learn More
        </Button>
      </div>
      
      {availability && (
        <p className="mt-4 text-xs text-gray-400 uppercase tracking-wider text-center">
          {availability}
        </p>
      )}
    </Card>
  );
};

export default TicketCard;
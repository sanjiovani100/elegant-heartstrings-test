import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TicketCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isVip: boolean;
  availability: string;
}

export const TicketCard = ({
  title,
  price,
  description,
  features,
  isVip,
  availability
}: TicketCardProps) => {
  return (
    <Card className={`ticket-card ${
      isVip ? 'border-2 border-fashionista-red' : 'border border-white/10'
    }`}>
      {isVip && (
        <div className="absolute top-4 right-4 bg-fashionista-red text-white px-3 py-1 rounded-full text-sm font-medium">
          VIP
        </div>
      )}
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-montserrat font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="ml-2 text-gray-400">/person</span>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-fashionista-pink shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <Button 
            className={`w-full ${
              isVip 
                ? 'bg-fashionista-red hover:bg-fashionista-red/90' 
                : 'bg-white/10 hover:bg-white/20'
            } text-white`}
          >
            Select Ticket
          </Button>
          <p className="text-sm text-center text-gray-400">{availability}</p>
        </div>
      </div>
    </Card>
  );
};
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
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
      isVip ? 'border-2 border-fashionista-red' : 'border border-gray-200'
    }`}>
      {isVip && (
        <div className="absolute top-4 right-4 bg-fashionista-red text-white px-3 py-1 rounded-full text-sm font-medium">
          VIP
        </div>
      )}
      
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-montserrat font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 text-gray-500">/person</span>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-fashionista-red shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <Button 
            className={`w-full ${
              isVip 
                ? 'bg-fashionista-red hover:bg-fashionista-red/90' 
                : 'bg-gray-900 hover:bg-gray-800'
            } text-white`}
          >
            Select Ticket
          </Button>
          <p className="text-sm text-center text-gray-500">{availability}</p>
        </div>
      </div>
    </Card>
  );
};
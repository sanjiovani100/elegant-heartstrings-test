import { Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${
      isVip ? 'border-2 border-fashionista-red shadow-glow' : 'border border-white/10'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 pointer-events-none" />
      
      {/* VIP Badge */}
      {isVip && (
        <Badge className="absolute top-4 right-4 bg-fashionista-red text-white px-3 py-1">
          VIP
        </Badge>
      )}
      
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-2xl font-playfair font-bold text-white">{title}</h3>
          <p className="text-gray-300 font-montserrat">{description}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="ml-2 text-gray-400">/person</span>
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-fashionista-pink shrink-0 mt-0.5" />
              <span className="text-gray-300 font-montserrat">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Payment Methods */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <CreditCard className="h-4 w-4" />
          <span>Secure payment with Stripe</span>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button 
            variant="gradient"
            className={`w-full h-12 text-lg font-semibold ${
              isVip ? 'shadow-glow' : ''
            }`}
          >
            Select Ticket
          </Button>
          <p className="text-sm text-center text-gray-400 font-montserrat">{availability}</p>
        </div>
      </div>
    </Card>
  );
};
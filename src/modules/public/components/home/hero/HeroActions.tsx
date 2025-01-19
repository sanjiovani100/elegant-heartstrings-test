import { Button } from "@/components/ui/button";
import { HeroActionsProps } from "./types";

export const HeroActions = ({ onGetTickets, onSignUp }: HeroActionsProps) => {
  return (
    <div className="space-x-6 animate-fade-up delay-200">
      <Button 
        size="lg" 
        variant="gradient"
        className="text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-glow font-inter"
        onClick={onGetTickets}
      >
        Get Tickets
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className="bg-[#F0F0F0] text-black hover:bg-white px-8 py-6 text-lg transition-all duration-300 font-inter"
        onClick={onSignUp}
      >
        Sign Up Now
      </Button>
    </div>
  );
};
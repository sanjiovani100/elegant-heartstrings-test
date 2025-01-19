import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingHeart } from "./FloatingHeart";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroProps } from "./types";

const Hero = ({ title, subtitle }: HeroProps) => {
  const navigate = useNavigate();

  const handleGetTickets = useCallback(() => {
    navigate('/tickets');
  }, [navigate]);

  const handleSignUp = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 2} />
      ))}

      {/* Main Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url(/hero1.jpg)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
          <HeroContent 
            title="Fashionistas: A Night of Glamour & Fashion"
            subtitle="Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show."
          />
          <HeroActions 
            onGetTickets={handleGetTickets}
            onSignUp={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
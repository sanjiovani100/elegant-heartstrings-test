import { Button } from "@/shared/components/ui/Button";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { getAnimationDelay } from "@/shared/utils/animation";
import { HeroProps } from "./types";
import { FloatingHeart } from "./FloatingHeart";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";

const Hero = ({ title, subtitle }: HeroProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleGetTickets = () => {
    // Handle get tickets action
  };

  const handleSignUp = () => {
    // Handle sign up action
  };

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
          <HeroContent title={title} subtitle={subtitle} />
          <HeroActions onGetTickets={handleGetTickets} onSignUp={handleSignUp} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

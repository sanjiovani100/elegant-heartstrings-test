import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingHeart = ({ delay }: { delay: number }) => (
  <div 
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      opacity: 0.3
    }}
  >
    <Heart className="text-white w-4 h-4" />
  </div>
);

const Hero = () => {
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
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-6 animate-fade-up drop-shadow-lg leading-tight">
            Fashionistas: A Night of Glamour & Fashion
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#F0F0F0] mb-8 animate-fade-up delay-100 font-montserrat">
            Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show.
          </p>

          {/* CTAs */}
          <div className="space-x-6 animate-fade-up delay-200">
            <Button 
              size="lg" 
              className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-glow font-inter"
            >
              Get Tickets
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#F0F0F0] text-black hover:bg-white px-8 py-6 text-lg transition-all duration-300 font-inter"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
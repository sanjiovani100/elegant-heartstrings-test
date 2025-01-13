import { Heart } from "lucide-react";

const FloatingHeart = ({ delay }: { delay: number }) => (
  <div 
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      opacity: 0.3
    }}
  >
    <Heart className="text-fashionista-pink w-4 h-4" />
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 animate-fade-up drop-shadow-lg">
            Fashionistas: A Night of Glamour & Elegance
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-fashionista-pink mb-8 animate-fade-up delay-100 font-montserrat">
            Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show.
          </p>

          {/* CTAs */}
          <div className="space-x-4 animate-fade-up delay-200">
            <button className="bg-fashionista-red hover:bg-fashionista-pink text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
              Get Tickets
            </button>
            <button className="border-2 border-fashionista-pink text-white px-8 py-3 rounded-full hover:bg-fashionista-pink hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ModelHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-up"
        style={{ backgroundImage: 'url(/hero2.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair leading-tight animate-fade-up">
            Step Into the Spotlight at Fashionistas Valentine's Event
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-inter animate-fade-up delay-100">
            Join the ultimate platform for showcasing your talent to top designers, sponsors, and media.
          </p>
          <div className="space-x-4 animate-fade-up delay-200">
            <Button 
              size="lg"
              variant="gradient"
              onClick={() => document.getElementById('model-signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white px-8 py-6 transition-all duration-300"
            >
              Apply to Be a Model
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('model-benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelHero;
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg"
];

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
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 2} />
      ))}

      {/* Image Carousel */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.1)",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient bg-opacity-70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 animate-fade-up">
            Fashionistas: A Night of Glamour & Elegance
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up delay-100">
            Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show.
          </p>

          {/* CTAs */}
          <div className="space-x-4 animate-fade-up delay-200">
            <button className="bg-fashionista-red hover:bg-fashionista-pink text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Tickets
            </button>
            <button className="border-2 border-fashionista-pink text-white px-8 py-3 rounded-full hover:bg-fashionista-pink hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign Up Now
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 flex justify-center gap-4 text-white animate-fade-up delay-300">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-3xl font-bold text-fashionista-pink">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase text-gray-300">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
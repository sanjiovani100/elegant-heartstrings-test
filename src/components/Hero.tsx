import { useEffect, useState } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
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
          }}
        />
      ))}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 animate-fade-up">
            A Night of Glamour & Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-up">
            Join us for an exclusive Valentine's Lingerie Fashion Event celebrating beauty, love, and luxury.
          </p>
          <div className="space-x-4 animate-fade-up">
            <button className="bg-fashionista-red text-white px-8 py-3 rounded hover:bg-fashionista-pink transition-colors duration-300">
              Get Tickets
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
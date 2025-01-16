import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group px-3">
            <img
              src="/lovable-uploads/196663b0-0dd0-4f0e-a715-b7ce52470ba9.png"
              alt="Fashionistas Logo - High-Fashion Event Branding"
              className="w-[120px] md:w-[140px] h-auto transition-transform duration-300 group-hover:scale-105 hover:filter hover:brightness-125"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Events</Link>
            <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Tickets</Link>
            <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">About</a>
            <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Contact</a>
          </div>
          <Link to="/tickets" className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-6 py-2 rounded transition-all duration-300 hover:shadow-glow">
            Get Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
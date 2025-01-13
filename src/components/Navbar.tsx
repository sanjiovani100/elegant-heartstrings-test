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
              className="w-[100px] md:w-[150px] h-auto transition-transform duration-300 group-hover:scale-105 hover:filter hover:brightness-125"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#highlights" className="nav-link">Highlights</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#tickets" className="nav-link">Tickets</a>
          </div>
          <button className="bg-fashionista-red text-white px-6 py-2 rounded hover:bg-fashionista-pink transition-colors duration-300">
            Get Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
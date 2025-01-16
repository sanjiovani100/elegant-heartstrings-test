import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-playfair text-2xl">
            Fashionistas
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsPartnersOpen(true)}
              onMouseLeave={() => setIsPartnersOpen(false)}
            >
              <button 
                className="nav-link flex items-center gap-1"
              >
                Partners
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isPartnersOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-2">
                  <Link 
                    to="/sponsors" 
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Sponsors
                  </Link>
                  <Link 
                    to="/models" 
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Models
                  </Link>
                  <Link 
                    to="/designer" 
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Designers
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/tickets" className="nav-link">
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
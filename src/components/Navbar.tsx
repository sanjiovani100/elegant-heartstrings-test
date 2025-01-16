import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-playfair text-2xl">
            Fashionistas
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/models" className="nav-link">
              Models
            </Link>
            <Link to="/designer" className="nav-link">
              Designer
            </Link>
            <Link to="/sponsors" className="nav-link">
              Sponsors
            </Link>
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/tickets" className="nav-link">
              Tickets
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
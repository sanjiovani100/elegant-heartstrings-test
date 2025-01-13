import { useState } from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Event Highlights", href: "#highlights" },
  { label: "Lingerie Showcase", href: "#showcase" },
  { label: "Tickets", href: "#tickets" },
  { label: "Sponsorship", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Event Overview */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/10ac5800-7327-473c-bfd1-2a77ddb82412.png"
                alt="Fashionistas Valentine's Lingerie Fashion Event Logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="font-playfair text-xl text-fashionista-pink">
                Fashionistas Valentine's
              </h3>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Experience elegance and glamour in Medellín's ultimate Valentine's event.
            </p>
            <Button variant="outline" className="hover:text-fashionista-pink hover:border-fashionista-pink">
              Learn More
            </Button>
          </div>

          {/* Column 2: Navigation & Social */}
          <div className="space-y-6">
            <nav>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="nav-link inline-flex items-center hover:text-fashionista-pink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-4">
              <h4 className="text-fashionista-pink font-playfair mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="hover:text-fashionista-pink transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter & Contact */}
          <div className="space-y-6">
            <div className="newsletter-signup">
              <h4 className="font-playfair text-lg text-fashionista-pink mb-4">
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-gray-700 placeholder:text-gray-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-fashionista-red hover:bg-fashionista-pink transition-colors"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>
            <div className="contact-info space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-fashionista-pink" />
                <span>Skybox Medellín, Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-fashionista-pink" />
                <span>(+57) 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-fashionista-pink" />
                <span>contact@fashionistas.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <span>© 2024 Fashionistas.</span>
            <Heart className="w-4 h-4 text-fashionista-pink" />
            <span>All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-fashionista-pink transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-fashionista-pink transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

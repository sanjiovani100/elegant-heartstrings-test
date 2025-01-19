import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { useUserRole } from "@/hooks/use-user-role";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { role } = useUserRole();

  const isSponsorsApplyPage = location.pathname === "/sponsors/apply";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Check and set initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was a problem signing you out.",
        variant: "destructive",
      });
    }
  };

  const getNavbarBackground = () => {
    if (isSponsorsApplyPage) {
      return 'bg-black/90';
    }
    return isScrolled ? 'bg-black/90' : 'bg-transparent';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()} py-4`}>
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
            
            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-[#F0F0F0] hover:text-white text-lg inline-flex items-center">
                <Users className="w-5 h-5 mr-1" />
                Partners
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border border-white/10">
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/sponsors" className="text-white w-full">Sponsors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/designer" className="text-white w-full">Designers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/models" className="text-white w-full">Models</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">About</a>
            <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Contact</a>
            {role === "admin" && (
              <>
                <Link to="/admin/roles" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  Manage Roles
                </Link>
                <Link to="/admin/events/create" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  Create Event
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="bg-fashionista-red hover:bg-fashionista-red/90 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
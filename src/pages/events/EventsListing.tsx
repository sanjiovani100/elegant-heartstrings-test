import { useState, useEffect } from "react";
import { Search, Filter, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import EventCard from "@/components/events/EventCard";
import EventFilters from "@/components/events/EventFilters";

const EventsListing = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulated events data - in production, fetch from Supabase
  const events = [
    {
      id: 1,
      title: "Valentine's Fashion Extravaganza",
      date: "2024-02-14T19:00:00",
      location: "Skybox Medellín",
      imageUrl: "/hero1.jpg",
      category: "Fashion Show",
      price: "From $99",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Designer Showcase 2024",
      date: "2024-02-20T18:00:00",
      location: "Fashion District",
      imageUrl: "/hero2.jpg",
      category: "Showcase",
      price: "From $149",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Spring Collection Launch",
      date: "2024-03-01T20:00:00",
      location: "Metropolitan Gallery",
      imageUrl: "/hero3.jpg",
      category: "Launch Party",
      price: "From $199",
      status: "upcoming",
    },
  ];

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("/hero1.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 animate-fade-up">
              Upcoming Fashion Events
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-up delay-100">
              Join us for Medellín's most exclusive fashion experiences
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filters Toggle */}
        <div className="md:hidden mb-6">
          <Button
            variant="outline"
            className="w-full border-white/20 text-white"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              "md:w-64 shrink-0",
              isFiltersOpen ? "block" : "hidden md:block"
            )}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full h-12 pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <EventFilters />
          </aside>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Loading skeleton cards
                [...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg h-[400px] animate-pulse"
                  />
                ))
              ) : (
                events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventsListing;
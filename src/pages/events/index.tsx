import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EventCard from "@/components/events/EventCard";
import EventFilters from "@/components/events/EventFilters";
import { cn } from "@/lib/utils";

const EventsPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Updated events data with new images
  const events = [
    {
      id: 1,
      title: "Spring/Summer Fashion Gala",
      date: "2024-02-14T19:00:00",
      location: "Skybox Medellín",
      imageUrl: "/lovable-uploads/d8eb6844-0ce1-4dac-8af3-885d48bad984.png",
      category: "Fashion Show",
      price: "From $199",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Summer Collection Preview",
      date: "2024-02-20T18:00:00",
      location: "Fashion District",
      imageUrl: "/lovable-uploads/23792608-ea98-47a2-9e5c-ac49c6228df3.png",
      category: "Preview",
      price: "From $149",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Floral Couture Exhibition",
      date: "2024-03-01T20:00:00",
      location: "Metropolitan Gallery",
      imageUrl: "/lovable-uploads/f1b6c1ac-400c-4430-af0c-1f703ac936ab.png",
      category: "Exhibition",
      price: "From $299",
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/f1b6c1ac-400c-4430-af0c-1f703ac936ab.png")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 animate-fade-up">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-up">
              Discover and book your spot at Medellín's most exclusive fashion events
            </p>
            <div className="w-full max-w-2xl animate-fade-up">
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
            <EventFilters />
          </aside>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
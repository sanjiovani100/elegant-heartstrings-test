import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import EventFilters from "@/components/events/EventFilters";
import EventCTA from "@/components/events/EventCTA";
import EventsHero from "@/components/events/EventsHero";
import EventsGrid from "@/components/events/EventsGrid";
import EventsMosaic from "@/components/events/EventsMosaic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Event } from "@/types/events";

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <EventsHero />

      {/* Category Tabs and Event Listings */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto bg-white/5">
              <TabsTrigger value="all" className="flex-1">All Events</TabsTrigger>
              <TabsTrigger value="fashion" className="flex-1">Fashion Shows</TabsTrigger>
              <TabsTrigger value="showcase" className="flex-1">Showcases</TabsTrigger>
              <TabsTrigger value="party" className="flex-1">Launch Parties</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              {/* Main Content */}
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
                  <EventsGrid events={events} isLoading={isLoading} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fashion">
              <EventsGrid 
                events={events.filter(event => event.category === "Fashion Show")} 
                isLoading={isLoading} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Events Mosaic */}
      <EventsMosaic events={events} />

      {/* Add EventCTA above Footer */}
      <EventCTA />
      
      <Footer />
    </div>
  );
};

export default EventsListing;
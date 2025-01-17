import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import EventFilters from "@/components/events/EventFilters";
import EventsGrid from "@/components/events/EventsGrid";
import EventsHero from "@/components/events/EventsHero";
import { useEvents } from "@/hooks/use-events";
import { useToast } from "@/hooks/use-toast";

const EventsListing = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  const { data: events, isLoading, error } = useEvents();

  if (error) {
    toast({
      variant: "destructive",
      title: "Error loading events",
      description: "Please try again later.",
    });
  }

  const filteredEvents = events?.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <EventsHero />

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full h-12 pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button
                variant="outline"
                className="md:hidden border-white/20 text-white"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
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
              <EventsGrid events={filteredEvents || []} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsListing;
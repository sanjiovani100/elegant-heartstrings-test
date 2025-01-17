import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Event } from "@/types/events";

interface EventsMosaicProps {
  events: Event[];
}

const EventsMosaic = ({ events }: EventsMosaicProps) => {
  return (
    <section className="py-16 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-white mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={cn(
                "group relative overflow-hidden rounded-lg transition-all duration-500",
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              )}
            >
              <div className="aspect-square w-full">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-montserrat text-white mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-200 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsMosaic;
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/events";
import EventCard from "@/components/events/EventCard";
import { ResizeErrorBoundary } from "@/components/error/ResizeErrorBoundary";

const EventsGrid = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "published")
        .order("date", { ascending: true });

      if (error) throw error;
      
      // Transform the data to match the Event type
      return (data as any[]).map((event): Event => ({
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        status: event.status,
        cover_image: event.cover_image,
        capacity: event.capacity,
        category: event.category,
        venue_details: event.venue_details ? {
          layout: event.venue_details.layout || '',
          seating_capacity: event.venue_details.seating_capacity || 0,
          standing_capacity: event.venue_details.standing_capacity || 0,
          accessibility_features: event.venue_details.accessibility_features || [],
          facilities: event.venue_details.facilities || []
        } : null,
        schedule_timeline: event.schedule_timeline || null
      }));
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg h-[400px] animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events?.map((event) => (
        <ResizeErrorBoundary key={event.id}>
          <EventCard event={event} />
        </ResizeErrorBoundary>
      ))}
    </div>
  );
};

export default EventsGrid;
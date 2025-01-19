import React from "react";
import { useEvents } from "@/hooks/use-events";
import EventCard from "@/modules/public/components/events/EventCard";
import { transformVenueDetails, transformScheduleTimeline } from "@/types/utils/transformers";
import { Event } from "@/types/events";

const EventsListing = () => {
  const { data: rawEvents, isLoading } = useEvents();

  const events: Event[] = React.useMemo(() => {
    if (!rawEvents) return [];
    
    return rawEvents.map(event => ({
      ...event,
      venue_details: transformVenueDetails(event.venue_details),
      schedule_timeline: transformScheduleTimeline(event.schedule_timeline)
    }));
  }, [rawEvents]);

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsListing;
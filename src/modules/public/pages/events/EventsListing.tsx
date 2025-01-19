import React from "react";
import { useEvents } from "@/hooks/use-events";
import EventCard from "@/modules/public/components/events/EventCard";

const EventsListing = () => {
  const { data: events, isLoading } = useEvents();

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
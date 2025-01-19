import { useEffect, useState } from 'react';
import { Event } from '@/types/events';
import { transformVenueDetails, transformScheduleTimeline } from '@/types/utils/transformers';
import EventCard from '@/components/events/EventCard';
import EventFilters from '@/components/events/EventFilters';
import { supabase } from '@/integrations/supabase/client';

const EventsListing = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'published')
          .is('deleted_at', null);

        if (error) throw error;

        const transformedEvents = data.map(event => ({
          ...event,
          venue_details: transformVenueDetails(event.venue_details),
          schedule_timeline: transformScheduleTimeline(event.schedule_timeline)
        }));

        setEvents(transformedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <EventFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsListing;
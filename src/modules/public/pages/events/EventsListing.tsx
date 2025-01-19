import { useQuery } from '@tanstack/react-query';
import { Event } from '@/types/events';
import EventsGrid from '@/components/events/EventsGrid';
import EventFilters from '@/components/events/EventFilters';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { transformVenueDetails } from '@/types/utils/transformers';

const EventsListing = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'published')
        .is('deleted_at', null);

      if (error) {
        console.error('Error fetching events:', error);
        throw error;
      }

      // Transform the raw data into the correct Event type
      return data?.map(event => ({
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        status: event.status,
        cover_image: event.cover_image,
        capacity: event.capacity,
        category: event.category,
        venue_details: transformVenueDetails(event.venue_details),
        schedule_timeline: event.schedule_timeline,
        price: event.price
      })) as Event[];
    },
  });

  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertDescription>
          There was an error loading the events. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <EventFilters />
      <EventsGrid events={events || []} isLoading={isLoading} />
    </div>
  );
};

export default EventsListing;
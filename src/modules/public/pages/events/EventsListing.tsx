import { useQuery } from '@tanstack/react-query';
import { Event } from '@/types/events';
import EventCard from '@/components/events/EventCard';
import EventFilters from '@/components/events/EventFilters';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from "@/components/ui/alert";

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

      return data as Event[];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {isLoading ? (
          // Loading skeleton cards
          [...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg h-[400px] animate-pulse"
            />
          ))
        ) : (
          events?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventsListing;
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/events";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("active_events")
        .select("*")
        .eq("is_deleted", false)
        .order("date", { ascending: true });

      if (error) {
        throw error;
      }

      // Transform the data to match our Event type
      const transformedData: Event[] = data.map((event) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        location: event.location,
        imageUrl: event.cover_image,
        category: "Fashion Show", // Default category since it's not in the database
        price: "From $99", // Default price since it's not in the database
        status: event.status,
      }));

      return transformedData;
    },
  });
};
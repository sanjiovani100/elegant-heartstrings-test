import { EventStatus, EventCategory } from '@/types/supabase/enums';

export interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string;
  status: EventStatus | null;
  cover_image: string | null;
  capacity: number | null;
  category: EventCategory | null;
  price?: string; // Derived from ticket_types
  venue_details?: {
    layout: string;
    seating_capacity: number;
    standing_capacity: number;
    accessibility_features: string[];
    facilities: string[];
  } | null;
  schedule_timeline?: {
    setup_time: string;
    rehearsal_time: string;
    doors_open: string;
    main_event: string;
    intervals: any[];
    closing_time: string;
  } | null;
}

// Helper function to transform database events to frontend format
export const transformDatabaseEvent = (dbEvent: any): Event => {
  return {
    id: dbEvent.id,
    title: dbEvent.title,
    description: dbEvent.description,
    date: dbEvent.date,
    location: dbEvent.location,
    status: dbEvent.status,
    cover_image: dbEvent.cover_image,
    capacity: dbEvent.capacity,
    category: dbEvent.category,
    price: "From $99", // Default price - should be updated with actual ticket prices
    venue_details: dbEvent.venue_details,
    schedule_timeline: dbEvent.schedule_timeline
  };
};
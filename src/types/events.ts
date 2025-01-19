import { EventStatus } from '@/types/supabase/enums';
import { Json } from '@/types/supabase/database';

export type EventCategory = 
  | 'Fashion Show'
  | 'Gala'
  | 'Workshop'
  | 'Exhibition'
  | 'Conference'
  | 'Networking'
  | 'Awards_Ceremony'
  | 'Runway_Show'
  | 'Masterclass'
  | 'Pop_Up_Shop'
  | 'VIP_Reception'
  | 'Industry_Mixer'
  | 'Designer_Showcase'
  | 'Trend_Presentation';

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

export const transformDatabaseEvent = (dbEvent: any): Event => {
  const venue_details = typeof dbEvent.venue_details === 'string' 
    ? JSON.parse(dbEvent.venue_details)
    : dbEvent.venue_details;

  const schedule_timeline = typeof dbEvent.schedule_timeline === 'string'
    ? JSON.parse(dbEvent.schedule_timeline)
    : dbEvent.schedule_timeline;

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
    price: dbEvent.ticket_types?.[0]?.price ? `From $${dbEvent.ticket_types[0].price}` : "Price TBA",
    venue_details,
    schedule_timeline
  };
};
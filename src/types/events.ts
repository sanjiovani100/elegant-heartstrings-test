import { EventStatus, EventCategory } from '@/types/supabase/enums';
import { Json } from '@/types/supabase/database';

// Strongly typed venue details interface
export interface VenueDetails {
  layout: string;
  seating_capacity: number;
  standing_capacity: number;
  accessibility_features: string[];
  facilities: string[];
}

// Strongly typed schedule timeline interface
export interface ScheduleTimeline {
  setup_time: string;
  rehearsal_time: string;
  doors_open: string;
  main_event: string;
  intervals: any[];
  closing_time: string;
}

// Raw event interface matching Supabase schema
export interface RawEvent {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string;
  status: EventStatus | null;
  cover_image: string | null;
  capacity: number | null;
  category: EventCategory | null;
  venue_details: Json | null;
  schedule_timeline: Json | null;
  metadata: Json | null;
  rich_description: string | null;
  featured_highlights: Json | null;
  prerequisites: Json | null;
  dress_code: string | null;
  registration_status: string | null;
  setup_completion_status: Json | null;
}

// Transformed event interface for frontend use
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
  price?: string;
  venue_details: VenueDetails | null;
  schedule_timeline: ScheduleTimeline | null;
}

// Type guard for venue details
export const isVenueDetails = (value: unknown): value is VenueDetails => {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.layout === 'string' &&
    typeof v.seating_capacity === 'number' &&
    typeof v.standing_capacity === 'number' &&
    Array.isArray(v.accessibility_features) &&
    Array.isArray(v.facilities)
  );
};

// Type guard for schedule timeline
export const isScheduleTimeline = (value: unknown): value is ScheduleTimeline => {
  if (!value || typeof value !== 'object') return false;
  const s = value as Record<string, unknown>;
  return (
    typeof s.setup_time === 'string' &&
    typeof s.rehearsal_time === 'string' &&
    typeof s.doors_open === 'string' &&
    typeof s.main_event === 'string' &&
    Array.isArray(s.intervals) &&
    typeof s.closing_time === 'string'
  );
};

// Transform database event to frontend event
export const transformDatabaseEvent = (dbEvent: RawEvent): Event => {
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
    venue_details: isVenueDetails(venue_details) ? venue_details : null,
    schedule_timeline: isScheduleTimeline(schedule_timeline) ? schedule_timeline : null,
  };
};
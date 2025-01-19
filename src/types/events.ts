import { EventStatus, EventCategory } from '@/types/supabase/enums';
import { Json } from '@/types/supabase/database';

// Strongly typed venue details interface with index signature
export interface VenueDetails {
  layout: string;
  seating_capacity: number;
  standing_capacity: number;
  accessibility_features: string[];
  facilities: string[];
  [key: string]: string | number | string[] | undefined;
}

// Strongly typed schedule timeline interface with index signature
export interface ScheduleTimeline {
  setup_time: string;
  rehearsal_time: string;
  doors_open: string;
  main_event: string;
  intervals: Array<{
    start_time: string;
    end_time: string;
    description: string;
  }>;
  closing_time: string;
  [key: string]: string | Array<any> | undefined;
}

// Event interface for frontend use
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
  venue_details: VenueDetails | null;
  schedule_timeline: ScheduleTimeline | null;
  price?: string;
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
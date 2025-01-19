import { Json } from "@/types/supabase/database";
import { VenueDetails, ScheduleTimeline } from "@/types/events";

export const transformVenueDetails = (data: Json | null): VenueDetails | null => {
  if (!data) return null;
  
  try {
    const venueData = data as Record<string, unknown>;
    return {
      layout: String(venueData.layout || ''),
      seating_capacity: Number(venueData.seating_capacity || 0),
      standing_capacity: Number(venueData.standing_capacity || 0),
      accessibility_features: Array.isArray(venueData.accessibility_features) 
        ? venueData.accessibility_features.map(String)
        : [],
      facilities: Array.isArray(venueData.facilities) 
        ? venueData.facilities.map(String)
        : []
    };
  } catch (error) {
    console.error('Error transforming venue details:', error);
    return null;
  }
};

export const transformScheduleTimeline = (data: Json | null): ScheduleTimeline | null => {
  if (!data) return null;
  
  try {
    const timelineData = data as Record<string, unknown>;
    return {
      setup_time: String(timelineData.setup_time || ''),
      rehearsal_time: String(timelineData.rehearsal_time || ''),
      doors_open: String(timelineData.doors_open || ''),
      main_event: String(timelineData.main_event || ''),
      intervals: Array.isArray(timelineData.intervals) ? timelineData.intervals : [],
      closing_time: String(timelineData.closing_time || '')
    };
  } catch (error) {
    console.error('Error transforming schedule timeline:', error);
    return null;
  }
};
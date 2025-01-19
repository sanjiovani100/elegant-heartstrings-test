import { Json } from '../database';
import { EventCategory, EventStatus } from '../enums';

export interface EventRow {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string;
  status: EventStatus | null;
  cover_image: string | null;
  capacity: number | null;
  created_at: string | null;
  updated_at: string | null;
  created_by: string;
  deleted_at: string | null;
  is_deleted: boolean | null;
  category: EventCategory | null;
  metadata: Json | null;
  venue_details: Json | null;
  branding_guidelines: Json | null;
  schedule_timeline: Json | null;
  rich_description: string | null;
  featured_highlights: Json | null;
  prerequisites: Json | null;
  dress_code: string | null;
  registration_status: string | null;
  setup_completion_status: Json | null;
}

export interface EventInsert extends Partial<Omit<EventRow, 'id'>> {
  id?: string;
}

export interface EventUpdate extends Partial<EventRow> {}
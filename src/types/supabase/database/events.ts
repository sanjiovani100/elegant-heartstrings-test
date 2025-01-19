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
  created_by: string;
  deleted_at: string | null;
  description: string | null;
  dress_code: string | null;
  featured_highlights: Json | null;
  id: string;
  is_deleted: boolean | null;
  location: string;
  metadata: Json | null;
  prerequisites: Json | null;
  registration_status: string | null;
  rich_description: string | null;
  schedule_timeline: Json | null;
  setup_completion_status: Json | null;
  status: EventStatus | null;
  title: string;
  updated_at: string | null;
  venue_details: Json | null;
}

export interface EventInsert extends Partial<Omit<EventRow, 'id'>> {
  id?: string;
}

export interface EventUpdate extends Partial<EventRow> {}
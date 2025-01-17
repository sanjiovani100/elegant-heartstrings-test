import { EventStatus, MediaStatus, MediaType } from '../enums';
import type { Json } from '../database';

export interface Event {
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
  category: string | null;
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
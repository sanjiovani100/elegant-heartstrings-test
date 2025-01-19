import { Json } from '../database';
import { ApplicationStatus, SponsorStatus } from '../enums';

export interface SponsorProfileRow {
  id: string;
  user_id: string | null;
  company_name: string;
  logo_url: string | null;
  website: string | null;
  industry: string | null;
  contact_info: Json | null;
  status: SponsorStatus | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface SponsorshipApplicationRow {
  id: string;
  sponsor_id: string | null;
  event_id: string | null;
  level_id: string | null;
  status: ApplicationStatus | null;
  custom_requests: string | null;
  internal_notes: string | null;
  submitted_at: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  contribution_details: string | null;
  contribution_range: Json | null;
  contribution_type: string | null;
  company_background: string | null;
  company_tagline: string | null;
  event_participation: Json | null;
  event_segments: string[] | null;
  previous_sponsorships: Json | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  signature_data: Json | null;
  sponsorship_goals: string[] | null;
  terms_accepted: boolean | null;
  website_links: Json | null;
}

export interface SponsorProfileInsert extends Partial<Omit<SponsorProfileRow, 'id'>> {
  id?: string;
}

export interface SponsorProfileUpdate extends Partial<SponsorProfileRow> {}

export interface SponsorshipApplicationInsert extends Partial<Omit<SponsorshipApplicationRow, 'id'>> {
  id?: string;
}

export interface SponsorshipApplicationUpdate extends Partial<SponsorshipApplicationRow> {}

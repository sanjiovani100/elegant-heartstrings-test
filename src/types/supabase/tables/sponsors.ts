import { ApplicationStatus, SponsorStatus, SponsorshipStatus, SponsorshipType } from '../enums';
import type { Json } from '../database';

export interface SponsorProfile {
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

export interface SponsorshipApplication {
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
  industry: string | null;
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  website_links: Json | null;
  event_segments: string[] | null;
  sponsorship_goals: string[] | null;
  target_audience: Json | null;
  custom_branding_requests: string | null;
  company_tagline: string | null;
  contribution_type: string | null;
  contribution_details: string | null;
  contribution_range: Json | null;
  company_background: string | null;
  previous_sponsorships: Json | null;
  event_participation: Json | null;
  terms_accepted: boolean | null;
  signature_data: Json | null;
  version: number | null;
}

export interface SponsorshipLevel {
  id: string;
  name: string;
  description: string | null;
  benefits: Json | null;
  price_range: Json | null;
  max_sponsors: number | null;
  type: SponsorshipType | null;
  digital_assets: Json | null;
  is_active: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}
import { Json } from '../database';
import { ApplicationStatus, SponsorStatus, SponsorshipStatus, SponsorshipType } from '../enums';

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
  company_background: string | null;
  company_tagline: string | null;
  contact_email: string | null;
  contact_name: string | null;
  contact_phone: string | null;
  contribution_details: string | null;
  contribution_range: Json | null;
  contribution_type: string | null;
  created_at: string | null;
  custom_branding_requests: string | null;
  custom_requests: string | null;
  event_participation: Json | null;
  event_segments: string[] | null;
  industry: string | null;
  internal_notes: string | null;
  previous_sponsorships: Json | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  signature_data: Json | null;
  sponsorship_goals: string[] | null;
  submitted_at: string | null;
  target_audience: Json | null;
  terms_accepted: boolean | null;
  updated_at: string | null;
  version: number | null;
  website_links: Json | null;
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

export interface EventSponsorship {
  id: string;
  event_id: string | null;
  sponsor_id: string | null;
  level_id: string | null;
  status: SponsorshipStatus | null;
  contribution_amount: number | null;
  agreement_details: Json | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface SponsorshipAsset {
  id: string;
  sponsor_id: string | null;
  asset_type: string;
  asset_url: string;
  status: string | null;
  approval_date: string | null;
  approved_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface SponsorshipAnalytics {
  id: string;
  sponsor_id: string | null;
  metric_type: string;
  metric_value: Json;
  measured_at: string | null;
}
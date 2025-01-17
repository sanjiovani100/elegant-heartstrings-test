export * from './events';
export * from './sponsors';
export * from './tickets';
export * from './users';
export * from './media';

import type { Event } from './events';
import type { SponsorProfile, SponsorshipApplication, SponsorshipLevel, EventSponsorship, SponsorshipAsset, SponsorshipAnalytics } from './sponsors';
import type { Ticket, TicketType } from './tickets';
import type { Profile } from './users';
import type { MediaCollection, MediaItem } from './media';

export interface Tables {
  events: Event;
  sponsor_profiles: SponsorProfile;
  sponsorship_applications: SponsorshipApplication;
  sponsorship_levels: SponsorshipLevel;
  event_sponsorships: EventSponsorship;
  sponsorship_assets: SponsorshipAsset;
  sponsorship_analytics: SponsorshipAnalytics;
  tickets: Ticket;
  ticket_types: TicketType;
  profiles: Profile;
  media_collections: MediaCollection;
  media_items: MediaItem;
}

export interface TablesInsert extends Tables {}
export interface TablesUpdate extends Tables {}

// Export all enums
export interface Enums {
  event_status: 'draft' | 'published' | 'completed' | 'cancelled';
  event_category: 'fashion_show' | 'workshop' | 'networking' | 'exhibition' | 'other';
  media_status: 'draft' | 'published';
  media_type: 'gallery' | 'highlights' | 'promotional';
  message_status: 'sent' | 'delivered' | 'read';
  notification_category: 'events' | 'tickets' | 'messages' | 'marketing';
  notification_type: 'event_update' | 'ticket_purchase' | 'message' | 'system';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  profile_status: 'incomplete' | 'complete';
  sponsor_status: 'active' | 'inactive';
  sponsorship_status: 'pending' | 'approved' | 'active' | 'completed';
  sponsorship_type: 'physical' | 'digital' | 'hybrid';
  ticket_status: 'available' | 'reserved' | 'purchased' | 'cancelled';
  ticket_tier: 'general' | 'vip';
  ticket_type_status: 'active' | 'inactive' | 'sold_out';
  user_role: 'admin' | 'model' | 'designer' | 'sponsor' | 'visitor';
  application_status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'declined';
  audit_action: 'INSERT' | 'UPDATE' | 'DELETE' | 'SOFT_DELETE';
}
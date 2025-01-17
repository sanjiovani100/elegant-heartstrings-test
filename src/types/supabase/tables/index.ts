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

export * from '../enums';
import type { Database } from './database';
import * as DatabaseTypes from './database';

export interface Tables {
  events: DatabaseTypes.EventRow;
  sponsor_profiles: DatabaseTypes.SponsorProfileRow;
  sponsorship_applications: DatabaseTypes.SponsorshipApplicationRow;
  tickets: DatabaseTypes.TicketRow;
  ticket_types: DatabaseTypes.TicketTypeRow;
  profiles: DatabaseTypes.ProfileRow;
}

export interface TablesInsert {
  events: DatabaseTypes.EventInsert;
  sponsor_profiles: DatabaseTypes.SponsorProfileInsert;
  sponsorship_applications: DatabaseTypes.SponsorshipApplicationInsert;
  tickets: DatabaseTypes.TicketInsert;
  ticket_types: DatabaseTypes.TicketTypeInsert;
  profiles: DatabaseTypes.ProfileInsert;
}

export interface TablesUpdate {
  events: DatabaseTypes.EventUpdate;
  sponsor_profiles: DatabaseTypes.SponsorProfileUpdate;
  sponsorship_applications: DatabaseTypes.SponsorshipApplicationUpdate;
  tickets: DatabaseTypes.TicketUpdate;
  ticket_types: DatabaseTypes.TicketTypeUpdate;
  profiles: DatabaseTypes.ProfileUpdate;
}
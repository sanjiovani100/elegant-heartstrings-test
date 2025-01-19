import * as Database from './database';

export interface Tables {
  events: Database.EventRow;
  sponsor_profiles: Database.SponsorProfileRow;
  sponsorship_applications: Database.SponsorshipApplicationRow;
  tickets: Database.TicketRow;
  ticket_types: Database.TicketTypeRow;
  profiles: Database.ProfileRow;
}

export interface TablesInsert {
  events: Database.EventInsert;
  sponsor_profiles: Database.SponsorProfileInsert;
  sponsorship_applications: Database.SponsorshipApplicationInsert;
  tickets: Database.TicketInsert;
  ticket_types: Database.TicketTypeInsert;
  profiles: Database.ProfileInsert;
}

export interface TablesUpdate {
  events: Database.EventUpdate;
  sponsor_profiles: Database.SponsorProfileUpdate;
  sponsorship_applications: Database.SponsorshipApplicationUpdate;
  tickets: Database.TicketUpdate;
  ticket_types: Database.TicketTypeUpdate;
  profiles: Database.ProfileUpdate;
}
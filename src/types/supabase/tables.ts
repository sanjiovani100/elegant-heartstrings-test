import {
  EventRow,
  SponsorProfileRow,
  SponsorshipApplicationRow,
  TicketRow,
  TicketTypeRow,
  ProfileRow,
  EventInsert,
  SponsorProfileInsert,
  SponsorshipApplicationInsert,
  TicketInsert,
  TicketTypeInsert,
  ProfileInsert,
  EventUpdate,
  SponsorProfileUpdate,
  SponsorshipApplicationUpdate,
  TicketUpdate,
  TicketTypeUpdate,
  ProfileUpdate
} from './database/tables';

export interface Tables {
  events: EventRow;
  sponsor_profiles: SponsorProfileRow;
  sponsorship_applications: SponsorshipApplicationRow;
  tickets: TicketRow;
  ticket_types: TicketTypeRow;
  profiles: ProfileRow;
}

export interface TablesInsert {
  events: EventInsert;
  sponsor_profiles: SponsorProfileInsert;
  sponsorship_applications: SponsorshipApplicationInsert;
  tickets: TicketInsert;
  ticket_types: TicketTypeInsert;
  profiles: ProfileInsert;
}

export interface TablesUpdate {
  events: EventUpdate;
  sponsor_profiles: SponsorProfileUpdate;
  sponsorship_applications: SponsorshipApplicationUpdate;
  tickets: TicketUpdate;
  ticket_types: TicketTypeUpdate;
  profiles: ProfileUpdate;
}
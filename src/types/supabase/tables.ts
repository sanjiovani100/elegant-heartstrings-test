import type { 
  Tables as DatabaseTables,
  EventRow,
  ProfileRow,
  SponsorProfileRow,
  TicketRow,
  MediaCollectionRow,
  MediaItemRow,
  ModelProfile,
  ModelFormData
} from "./database";

export interface Tables extends DatabaseTables {}
export interface TablesInsert extends Tables {}
export interface TablesUpdate extends Tables {}

export type {
  EventRow,
  ProfileRow,
  SponsorProfileRow,
  TicketRow,
  MediaCollectionRow,
  MediaItemRow,
  ModelProfile,
  ModelFormData
};
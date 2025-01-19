import type { Database } from "@/integrations/supabase/types";
import type {
  EventRow,
  ProfileRow,
  SponsorProfileRow,
  TicketRow,
  MediaCollectionRow,
  MediaItemRow,
  ModelProfile,
  ModelFormData
} from "./database/tables";

export type Tables = Database['public']['Tables'];
export type TablesInsert = Database['public']['Tables'];
export type TablesUpdate = Database['public']['Tables'];

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
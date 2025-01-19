import type { Database } from "@/integrations/supabase/types";
import type { ModelProfile, ModelFormData } from "./profile.types";

// Table row types
export type EventRow = Database["public"]["Tables"]["events"]["Row"];
export type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
export type SponsorProfileRow = Database["public"]["Tables"]["sponsor_profiles"]["Row"];
export type TicketRow = Database["public"]["Tables"]["tickets"]["Row"];
export type MediaCollectionRow = Database["public"]["Tables"]["media_collections"]["Row"];
export type MediaItemRow = Database["public"]["Tables"]["media_items"]["Row"];

// Re-export model specific types
export type { ModelProfile, ModelFormData };

// Export table types from other files
export * from "./event.types";
export * from "./sponsor.types";
export * from "./ticket.types";
export * from "./profile.types";
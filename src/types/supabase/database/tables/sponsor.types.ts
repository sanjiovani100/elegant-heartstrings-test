import type { Database } from "@/integrations/supabase/types";

export type SponsorProfileRow = Database['public']['Tables']['sponsor_profiles']['Row'];
export type SponsorProfileInsert = Database['public']['Tables']['sponsor_profiles']['Insert'];
export type SponsorProfileUpdate = Database['public']['Tables']['sponsor_profiles']['Update'];

export type SponsorshipApplicationRow = Database['public']['Tables']['sponsorship_applications']['Row'];
export type SponsorshipApplicationInsert = Database['public']['Tables']['sponsorship_applications']['Insert'];
export type SponsorshipApplicationUpdate = Database['public']['Tables']['sponsorship_applications']['Update'];
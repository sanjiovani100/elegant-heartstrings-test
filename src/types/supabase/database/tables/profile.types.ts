import type { Database } from "@/integrations/supabase/types";

export type ProfileRow = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

// Model-specific types
export interface ModelProfile extends ProfileRow {
  experience?: string;
  portfolioLink?: string;
}

export interface ModelFormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolioLink?: string;
}
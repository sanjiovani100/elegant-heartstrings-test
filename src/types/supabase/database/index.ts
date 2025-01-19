import type { Database } from '@/integrations/supabase/types';

// Row Types
export type EventRow = Database['public']['Tables']['events']['Row'];
export type SponsorProfileRow = Database['public']['Tables']['sponsor_profiles']['Row'];
export type SponsorshipApplicationRow = Database['public']['Tables']['sponsorship_applications']['Row'];
export type TicketRow = Database['public']['Tables']['tickets']['Row'];
export type TicketTypeRow = Database['public']['Tables']['ticket_types']['Row'];
export type ProfileRow = Database['public']['Tables']['profiles']['Row'];

// Insert Types
export type EventInsert = Database['public']['Tables']['events']['Insert'];
export type SponsorProfileInsert = Database['public']['Tables']['sponsor_profiles']['Insert'];
export type SponsorshipApplicationInsert = Database['public']['Tables']['sponsorship_applications']['Insert'];
export type TicketInsert = Database['public']['Tables']['tickets']['Insert'];
export type TicketTypeInsert = Database['public']['Tables']['ticket_types']['Insert'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];

// Update Types
export type EventUpdate = Database['public']['Tables']['events']['Update'];
export type SponsorProfileUpdate = Database['public']['Tables']['sponsor_profiles']['Update'];
export type SponsorshipApplicationUpdate = Database['public']['Tables']['sponsorship_applications']['Update'];
export type TicketUpdate = Database['public']['Tables']['tickets']['Update'];
export type TicketTypeUpdate = Database['public']['Tables']['ticket_types']['Update'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

// Re-export other types
export * from './events';
export * from './sponsors';
export * from './tickets';
export * from './users';
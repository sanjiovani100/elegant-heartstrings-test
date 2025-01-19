import type { Database } from "@/integrations/supabase/types";

export type TicketRow = Database['public']['Tables']['tickets']['Row'];
export type TicketInsert = Database['public']['Tables']['tickets']['Insert'];
export type TicketUpdate = Database['public']['Tables']['tickets']['Update'];

export type TicketTypeRow = Database['public']['Tables']['ticket_types']['Row'];
export type TicketTypeInsert = Database['public']['Tables']['ticket_types']['Insert'];
export type TicketTypeUpdate = Database['public']['Tables']['ticket_types']['Update'];
import type { Database } from "@/integrations/supabase/types";

export type MediaCollectionRow = Database['public']['Tables']['media_collections']['Row'];
export type MediaCollectionInsert = Database['public']['Tables']['media_collections']['Insert'];
export type MediaCollectionUpdate = Database['public']['Tables']['media_collections']['Update'];

export type MediaItemRow = Database['public']['Tables']['media_items']['Row'];
export type MediaItemInsert = Database['public']['Tables']['media_items']['Insert'];
export type MediaItemUpdate = Database['public']['Tables']['media_items']['Update'];
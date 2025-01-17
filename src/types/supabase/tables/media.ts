import { MediaStatus, MediaType } from '../enums';
import type { Json } from '../database';

export interface MediaCollection {
  id: string;
  event_id: string | null;
  title: string;
  description: string | null;
  type: MediaType;
  status: MediaStatus | null;
  created_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface MediaItem {
  id: string;
  collection_id: string | null;
  storage_path: string;
  file_type: string;
  metadata: Json | null;
  alt_text: string | null;
  caption: string | null;
  order_index: number | null;
  created_at: string | null;
}
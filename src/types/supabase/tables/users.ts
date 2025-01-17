import { ProfileStatus } from '../enums';
import type { Json } from '../database';

export interface Profile {
  id: string;
  full_name: string | null;
  bio: string | null;
  phone_number: string | null;
  avatar_url: string | null;
  website_url: string | null;
  social_links: Json | null;
  created_at: string | null;
  updated_at: string | null;
  status: ProfileStatus | null;
}
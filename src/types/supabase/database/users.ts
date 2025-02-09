import { Json } from '../database';
import { ProfileStatus } from '../enums';

export interface ProfileRow {
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

export interface ProfileInsert extends Partial<Omit<ProfileRow, 'id'>> {
  id: string;
}

export interface ProfileUpdate extends Partial<ProfileRow> {}
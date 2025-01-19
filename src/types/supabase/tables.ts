import {
  ProfileRow,
  ProfileInsert,
  ProfileUpdate,
  ModelProfile,
  ModelFormData
} from './database/tables/profile.types';

export interface Tables {
  profiles: ProfileRow;
}

export interface TablesInsert {
  profiles: ProfileInsert;
}

export interface TablesUpdate {
  profiles: ProfileUpdate;
}

export type { ModelProfile, ModelFormData };
import type { Tables, TablesInsert, TablesUpdate } from './tables';
import type { Views } from './views';
import type { Functions } from './functions';
import type { Enums } from './enums';

export interface Database {
  public: {
    Tables: Tables
    Views: Views
    Functions: Functions
    Enums: Enums
  }
}
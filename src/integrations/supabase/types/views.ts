import type { Json } from './json';
import type { Enums } from './enums';

export interface Views {
  active_events: {
    Row: {
      id: string | null
      title: string | null
      description: string | null
      date: string | null
      location: string | null
      status: Enums['event_status'] | null
      cover_image: string | null
      capacity: number | null
      created_at: string | null
      created_by: string | null
      deleted_at: string | null
      is_deleted: boolean | null
      updated_at: string | null
    }
  }
  active_sponsorships: {
    Row: {
      agreement_details: Json | null
      company_name: string | null
      contribution_amount: number | null
      created_at: string | null
      end_date: string | null
      event_id: string | null
      id: string | null
      level_id: string | null
      level_name: string | null
      sponsor_id: string | null
      start_date: string | null
      status: Enums['sponsorship_status'] | null
      updated_at: string | null
    }
    Relationships: [
      {
        foreignKeyName: "event_sponsorships_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "event_sponsorships_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "event_sponsorships_level_id_fkey"
        columns: ["level_id"]
        isOneToOne: false
        referencedRelation: "sponsorship_levels"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "event_sponsorships_sponsor_id_fkey"
        columns: ["sponsor_id"]
        isOneToOne: false
        referencedRelation: "sponsor_profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  available_tickets: {
    Row: {
      created_at: string | null
      event_id: string | null
      event_title: string | null
      id: string | null
      metadata: Json | null
      payment_status: Enums['payment_status'] | null
      price: number | null
      purchase_date: string | null
      quantity: number | null
      status: Enums['ticket_status'] | null
      ticket_type_id: string | null
      ticket_type_name: string | null
      tier: Enums['ticket_tier'] | null
      total_amount: number | null
      updated_at: string | null
      user_id: string | null
    }
    Relationships: [
      {
        foreignKeyName: "tickets_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "tickets_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "tickets_ticket_type_id_fkey"
        columns: ["ticket_type_id"]
        isOneToOne: false
        referencedRelation: "ticket_types"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "tickets_user_id_fkey"
        columns: ["user_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  unread_notifications: {
    Row: {
      action_url: string | null
      content: string | null
      created_at: string | null
      id: string | null
      read_at: string | null
      title: string | null
      type: Enums['notification_type'] | null
      user_id: string | null
    }
    Insert: {
      action_url?: string | null
      content?: string | null
      created_at?: string | null
      id?: string | null
      read_at?: string | null
      title?: string | null
      type?: Enums['notification_type'] | null
      user_id?: string | null
    }
    Update: {
      action_url?: string | null
      content?: string | null
      created_at?: string | null
      id?: string | null
      read_at?: string | null
      title?: string | null
      type?: Enums['notification_type'] | null
      user_id?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "notifications_user_id_fkey"
        columns: ["user_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
}
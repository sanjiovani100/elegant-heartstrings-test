import type { Json } from './json';
import type { Enums } from './enums';

export interface Tables {
  application_reviews: {
    Row: {
      application_id: string | null
      comment: string
      created_at: string | null
      id: string
      reviewer_id: string | null
    }
    Insert: {
      application_id?: string | null
      comment: string
      created_at?: string | null
      id?: string
      reviewer_id?: string | null
    }
    Update: {
      application_id?: string | null
      comment?: string
      created_at?: string | null
      id?: string
      reviewer_id?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "application_reviews_application_id_fkey"
        columns: ["application_id"]
        isOneToOne: false
        referencedRelation: "sponsorship_applications"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "application_reviews_reviewer_id_fkey"
        columns: ["reviewer_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  audit_logs: {
    Row: {
      action_type: Enums['audit_action']
      changes: Json | null
      created_at: string | null
      id: string
      ip_address: unknown | null
      record_id: string
      table_name: string
      user_agent: string | null
      user_id: string | null
    }
    Insert: {
      action_type: Enums['audit_action']
      changes?: Json | null
      created_at?: string | null
      id?: string
      ip_address?: unknown | null
      record_id: string
      table_name: string
      user_agent?: string | null
      user_id?: string | null
    }
    Update: {
      action_type?: Enums['audit_action']
      changes?: Json | null
      created_at?: string | null
      id?: string
      ip_address?: unknown | null
      record_id?: string
      table_name?: string
      user_agent?: string | null
      user_id?: string | null
    }
    Relationships: []
  }
  event_sponsorships: {
    Row: {
      agreement_details: Json | null
      contribution_amount: number | null
      created_at: string | null
      end_date: string | null
      event_id: string | null
      id: string
      level_id: string | null
      sponsor_id: string | null
      start_date: string | null
      status: Enums['sponsorship_status'] | null
      updated_at: string | null
    }
    Insert: {
      agreement_details?: Json | null
      contribution_amount?: number | null
      created_at?: string | null
      end_date?: string | null
      event_id?: string | null
      id?: string
      level_id?: string | null
      sponsor_id?: string | null
      start_date?: string | null
      status?: Enums['sponsorship_status'] | null
      updated_at?: string | null
    }
    Update: {
      agreement_details?: Json | null
      contribution_amount?: number | null
      created_at?: string | null
      end_date?: string | null
      event_id?: string | null
      id?: string
      level_id?: string | null
      sponsor_id?: string | null
      start_date?: string | null
      status?: Enums['sponsorship_status'] | null
      updated_at?: string | null
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
  events: {
    Row: {
      branding_guidelines: Json | null
      capacity: number | null
      category: Enums['event_category'] | null
      cover_image: string | null
      created_at: string | null
      created_by: string
      date: string
      deleted_at: string | null
      description: string | null
      dress_code: string | null
      featured_highlights: Json | null
      id: string
      is_deleted: boolean | null
      location: string
      metadata: Json | null
      prerequisites: Json | null
      registration_status: string | null
      rich_description: string | null
      schedule_timeline: Json | null
      setup_completion_status: Json | null
      status: Enums['event_status'] | null
      title: string
      updated_at: string | null
      venue_details: Json | null
    }
    Insert: {
      branding_guidelines?: Json | null
      capacity?: number | null
      category?: Enums['event_category'] | null
      cover_image?: string | null
      created_at?: string | null
      created_by: string
      date: string
      deleted_at?: string | null
      description?: string | null
      dress_code?: string | null
      featured_highlights?: Json | null
      id?: string
      is_deleted?: boolean | null
      location: string
      metadata?: Json | null
      prerequisites?: Json | null
      registration_status?: string | null
      rich_description?: string | null
      schedule_timeline?: Json | null
      setup_completion_status?: Json | null
      status?: Enums['event_status'] | null
      title: string
      updated_at?: string | null
      venue_details?: Json | null
    }
    Update: {
      branding_guidelines?: Json | null
      capacity?: number | null
      category?: Enums['event_category'] | null
      cover_image?: string | null
      created_at?: string | null
      created_by?: string
      date?: string
      deleted_at?: string | null
      description?: string | null
      dress_code?: string | null
      featured_highlights?: Json | null
      id?: string
      is_deleted?: boolean | null
      location?: string
      metadata?: Json | null
      prerequisites?: Json | null
      registration_status?: string | null
      rich_description?: string | null
      schedule_timeline?: Json | null
      setup_completion_status?: Json | null
      status?: Enums['event_status'] | null
      title?: string
      updated_at?: string | null
      venue_details?: Json | null
    }
    Relationships: []
  }
  media_collections: {
    Row: {
      created_at: string | null
      created_by: string | null
      description: string | null
      event_id: string | null
      id: string
      status: Enums['media_status'] | null
      title: string
      type: Enums['media_type']
      updated_at: string | null
    }
    Insert: {
      created_at?: string | null
      created_by?: string | null
      description?: string | null
      event_id?: string | null
      id?: string
      status?: Enums['media_status'] | null
      title: string
      type: Enums['media_type']
      updated_at?: string | null
    }
    Update: {
      created_at?: string | null
      created_by?: string | null
      description?: string | null
      event_id?: string | null
      id?: string
      status?: Enums['media_status'] | null
      title?: string
      type?: Enums['media_type']
      updated_at?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "media_collections_created_by_fkey"
        columns: ["created_by"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "media_collections_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "media_collections_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      }
    ]
  }
  media_items: {
    Row: {
      alt_text: string | null
      caption: string | null
      collection_id: string | null
      created_at: string | null
      file_type: string
      id: string
      metadata: Json | null
      order_index: number | null
      storage_path: string
    }
    Insert: {
      alt_text?: string | null
      caption?: string | null
      collection_id?: string | null
      created_at?: string | null
      file_type: string
      id?: string
      metadata?: Json | null
      order_index?: number | null
      storage_path: string
    }
    Update: {
      alt_text?: string | null
      caption?: string | null
      collection_id?: string | null
      created_at?: string | null
      file_type?: string
      id?: string
      metadata?: Json | null
      order_index?: number | null
      storage_path?: string
    }
    Relationships: [
      {
        foreignKeyName: "media_items_collection_id_fkey"
        columns: ["collection_id"]
        isOneToOne: false
        referencedRelation: "media_collections"
        referencedColumns: ["id"]
      }
    ]
  }
  messages: {
    Row: {
      content: string
      created_at: string | null
      id: string
      metadata: Json | null
      recipient_id: string | null
      sender_id: string | null
      status: Enums['message_status'] | null
      subject: string | null
    }
    Insert: {
      content: string
      created_at?: string | null
      id?: string
      metadata?: Json | null
      recipient_id?: string | null
      sender_id?: string | null
      status?: Enums['message_status'] | null
      subject?: string | null
    }
    Update: {
      content?: string
      created_at?: string | null
      id?: string
      metadata?: Json | null
      recipient_id?: string | null
      sender_id?: string | null
      status?: Enums['message_status'] | null
      subject?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "messages_recipient_id_fkey"
        columns: ["recipient_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "messages_sender_id_fkey"
        columns: ["sender_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  notification_preferences: {
    Row: {
      category: Enums['notification_category']
      created_at: string | null
      email_enabled: boolean | null
      push_enabled: boolean | null
      sms_enabled: boolean | null
      updated_at: string | null
      user_id: string
    }
    Insert: {
      category: Enums['notification_category']
      created_at?: string | null
      email_enabled?: boolean | null
      push_enabled?: boolean | null
      sms_enabled?: boolean | null
      updated_at?: string | null
      user_id: string
    }
    Update: {
      category?: Enums['notification_category']
      created_at?: string | null
      email_enabled?: boolean | null
      push_enabled?: boolean | null
      sms_enabled?: boolean | null
      updated_at?: string | null
      user_id?: string
    }
    Relationships: [
      {
        foreignKeyName: "notification_preferences_user_id_fkey"
        columns: ["user_id"]
        isOneToOne: true
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  notifications: {
    Row: {
      action_url: string | null
      content: string
      created_at: string | null
      id: string
      read_at: string | null
      title: string
      type: Enums['notification_type']
      user_id: string | null
    }
    Insert: {
      action_url?: string | null
      content: string
      created_at?: string | null
      id?: string
      read_at?: string | null
      title: string
      type: Enums['notification_type']
      user_id?: string | null
    }
    Update: {
      action_url?: string | null
      content?: string
      created_at?: string | null
      id?: string
      read_at?: string | null
      title?: string
      type?: Enums['notification_type']
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
  profiles: {
    Row: {
      avatar_url: string | null
      bio: string | null
      created_at: string | null
      full_name: string | null
      id: string
      phone_number: string | null
      social_links: Json | null
      status: Enums['profile_status'] | null
      updated_at: string | null
      website_url: string | null
    }
    Insert: {
      avatar_url?: string | null
      bio?: string | null
      created_at?: string | null
      full_name?: string | null
      id: string
      phone_number?: string | null
      social_links?: Json | null
      status?: Enums['profile_status'] | null
      updated_at?: string | null
      website_url?: string | null
    }
    Update: {
      avatar_url?: string | null
      bio?: string | null
      created_at?: string | null
      full_name?: string | null
      id?: string
      phone_number?: string | null
      social_links?: Json | null
      status?: Enums['profile_status'] | null
      updated_at?: string | null
      website_url?: string | null
    }
    Relationships: []
  }
  promotional_codes: {
    Row: {
      applicable_ticket_types: string[] | null
      code: string
      created_at: string | null
      created_by: string | null
      discount_type: string
      discount_value: number
      event_id: string | null
      id: string
      is_active: boolean | null
      metadata: Json | null
      times_used: number | null
      updated_at: string | null
      usage_limit: number | null
      valid_from: string | null
      valid_until: string | null
    }
    Insert: {
      applicable_ticket_types?: string[] | null
      code: string
      created_at?: string | null
      created_by?: string | null
      discount_type: string
      discount_value: number
      event_id?: string | null
      id?: string
      is_active?: boolean | null
      metadata?: Json | null
      times_used?: number | null
      updated_at?: string | null
      usage_limit?: number | null
      valid_from?: string | null
      valid_until?: string | null
    }
    Update: {
      applicable_ticket_types?: string[] | null
      code?: string
      created_at?: string | null
      created_by?: string | null
      discount_type?: string
      discount_value?: number
      event_id?: string | null
      id?: string
      is_active?: boolean | null
      metadata?: Json | null
      times_used?: number | null
      updated_at?: string | null
      usage_limit?: number | null
      valid_from?: string | null
      valid_until?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "promotional_codes_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "promotional_codes_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsor_profiles: {
    Row: {
      company_name: string
      contact_info: Json | null
      created_at: string | null
      id: string
      industry: string | null
      logo_url: string | null
      status: Enums['sponsor_status'] | null
      updated_at: string | null
      user_id: string | null
      website: string | null
    }
    Insert: {
      company_name: string
      contact_info?: Json | null
      created_at?: string | null
      id?: string
      industry?: string | null
      logo_url?: string | null
      status?: Enums['sponsor_status'] | null
      updated_at?: string | null
      user_id?: string | null
      website?: string | null
    }
    Update: {
      company_name?: string
      contact_info?: Json | null
      created_at?: string | null
      id?: string
      industry?: string | null
      logo_url?: string | null
      status?: Enums['sponsor_status'] | null
      updated_at?: string | null
      user_id?: string | null
      website?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsor_profiles_user_id_fkey"
        columns: ["user_id"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsorship_analytics: {
    Row: {
      id: string
      measured_at: string | null
      metric_type: string
      metric_value: Json
      sponsor_id: string | null
    }
    Insert: {
      id?: string
      measured_at?: string | null
      metric_type: string
      metric_value: Json
      sponsor_id?: string | null
    }
    Update: {
      id?: string
      measured_at?: string | null
      metric_type?: string
      metric_value?: Json
      sponsor_id?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsorship_analytics_sponsor_id_fkey"
        columns: ["sponsor_id"]
        isOneToOne: false
        referencedRelation: "sponsor_profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsorship_applications: {
    Row: {
      company_background: string | null
      company_tagline: string | null
      contact_email: string | null
      contact_name: string | null
      contact_phone: string | null
      contribution_details: string | null
      contribution_range: Json | null
      contribution_type: string | null
      created_at: string | null
      custom_branding_requests: string | null
      custom_requests: string | null
      event_id: string | null
      event_participation: Json | null
      event_segments: string[] | null
      id: string
      industry: string | null
      internal_notes: string | null
      level_id: string | null
      previous_sponsorships: Json | null
      reviewed_at: string | null
      reviewed_by: string | null
      signature_data: Json | null
      sponsor_id: string | null
      sponsorship_goals: string[] | null
      status: Enums['application_status'] | null
      submitted_at: string | null
      target_audience: Json | null
      terms_accepted: boolean | null
      updated_at: string | null
      version: number | null
      website_links: Json | null
    }
    Insert: {
      company_background?: string | null
      company_tagline?: string | null
      contact_email?: string | null
      contact_name?: string | null
      contact_phone?: string | null
      contribution_details?: string | null
      contribution_range?: Json | null
      contribution_type?: string | null
      created_at?: string | null
      custom_branding_requests?: string | null
      custom_requests?: string | null
      event_id?: string | null
      event_participation?: Json | null
      event_segments?: string[] | null
      id?: string
      industry?: string | null
      internal_notes?: string | null
      level_id?: string | null
      previous_sponsorships?: Json | null
      reviewed_at?: string | null
      reviewed_by?: string | null
      signature_data?: Json | null
      sponsor_id?: string | null
      sponsorship_goals?: string[] | null
      status?: Enums['application_status'] | null
      submitted_at?: string | null
      target_audience?: Json | null
      terms_accepted?: boolean | null
      updated_at?: string | null
      version?: number | null
      website_links?: Json | null
    }
    Update: {
      company_background?: string | null
      company_tagline?: string | null
      contact_email?: string | null
      contact_name?: string | null
      contact_phone?: string | null
      contribution_details?: string | null
      contribution_range?: Json | null
      contribution_type?: string | null
      created_at?: string | null
      custom_branding_requests?: string | null
      custom_requests?: string | null
      event_id?: string | null
      event_participation?: Json | null
      event_segments?: string[] | null
      id?: string
      industry?: string | null
      internal_notes?: string | null
      level_id?: string | null
      previous_sponsorships?: Json | null
      reviewed_at?: string | null
      reviewed_by?: string | null
      signature_data?: Json | null
      sponsor_id?: string | null
      sponsorship_goals?: string[] | null
      status?: Enums['application_status'] | null
      submitted_at?: string | null
      target_audience?: Json | null
      terms_accepted?: boolean | null
      updated_at?: string | null
      version?: number | null
      website_links?: Json | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsorship_applications_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "sponsorship_applications_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "sponsorship_applications_level_id_fkey"
        columns: ["level_id"]
        isOneToOne: false
        referencedRelation: "sponsorship_levels"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "sponsorship_applications_reviewed_by_fkey"
        columns: ["reviewed_by"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "sponsorship_applications_sponsor_id_fkey"
        columns: ["sponsor_id"]
        isOneToOne: false
        referencedRelation: "sponsor_profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsorship_assets: {
    Row: {
      approval_date: string | null
      approved_by: string | null
      asset_type: string
      asset_url: string
      created_at: string | null
      file_metadata: Json | null
      id: string
      sponsor_id: string | null
      status: string | null
      updated_at: string | null
      validation_errors: string[] | null
      validation_status: string | null
    }
    Insert: {
      approval_date?: string | null
      approved_by?: string | null
      asset_type: string
      asset_url: string
      created_at?: string | null
      file_metadata?: Json | null
      id?: string
      sponsor_id?: string | null
      status?: string | null
      updated_at?: string | null
      validation_errors?: string[] | null
      validation_status?: string | null
    }
    Update: {
      approval_date?: string | null
      approved_by?: string | null
      asset_type?: string
      asset_url?: string
      created_at?: string | null
      file_metadata?: Json | null
      id?: string
      sponsor_id?: string | null
      status?: string | null
      updated_at?: string | null
      validation_errors?: string[] | null
      validation_status?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsorship_assets_sponsor_id_fkey"
        columns: ["sponsor_id"]
        isOneToOne: false
        referencedRelation: "sponsor_profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsorship_categories: {
    Row: {
      created_at: string | null
      description: string | null
      id: string
      is_digital: boolean | null
      name: string
    }
    Insert: {
      created_at?: string | null
      description?: string | null
      id?: string
      is_digital?: boolean | null
      name: string
    }
    Update: {
      created_at?: string | null
      description?: string | null
      id?: string
      is_digital?: boolean | null
      name?: string
    }
    Relationships: []
  }
  sponsorship_documents: {
    Row: {
      application_id: string | null
      content_type: string
      created_at: string | null
      document_type: string
      file_name: string
      id: string
      is_signed: boolean | null
      signature_required: boolean | null
      signed_at: string | null
      signed_by: string | null
      size: number
      storage_path: string
      updated_at: string | null
    }
    Insert: {
      application_id?: string | null
      content_type: string
      created_at?: string | null
      document_type: string
      file_name: string
      id?: string
      is_signed?: boolean | null
      signature_required?: boolean | null
      signed_at?: string | null
      signed_by?: string | null
      size: number
      storage_path: string
      updated_at?: string | null
    }
    Update: {
      application_id?: string | null
      content_type?: string
      created_at?: string | null
      document_type?: string
      file_name?: string
      id?: string
      is_signed?: boolean | null
      signature_required?: boolean | null
      signed_at?: string | null
      signed_by?: string | null
      size?: number
      storage_path: string
      updated_at?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsorship_documents_application_id_fkey"
        columns: ["application_id"]
        isOneToOne: false
        referencedRelation: "sponsorship_applications"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "sponsorship_documents_signed_by_fkey"
        columns: ["signed_by"]
        isOneToOne: false
        referencedRelation: "profiles"
        referencedColumns: ["id"]
      }
    ]
  }
  sponsorship_levels: {
    Row: {
      benefits: Json | null
      created_at: string | null
      description: string | null
      digital_assets: Json | null
      id: string
      is_active: boolean | null
      max_sponsors: number | null
      name: string
      price_range: Json | null
      type: Enums['sponsorship_type'] | null
      updated_at: string | null
    }
    Insert: {
      benefits?: Json | null
      created_at?: string | null
      description?: string | null
      digital_assets?: Json | null
      id?: string
      is_active?: boolean | null
      max_sponsors?: number | null
      name: string
      price_range?: Json | null
      type?: Enums['sponsorship_type'] | null
      updated_at?: string | null
    }
    Update: {
      benefits?: Json | null
      created_at?: string | null
      description?: string | null
      digital_assets?: Json | null
      id?: string
      is_active?: boolean | null
      max_sponsors?: number | null
      name: string
      price_range?: Json | null
      type?: Enums['sponsorship_type'] | null
      updated_at?: string | null
    }
    Relationships: []
  }
  sponsorship_payments: {
    Row: {
      amount: number
      application_id: string | null
      created_at: string | null
      currency: string | null
      id: string
      invoice_number: string | null
      payment_date: string | null
      payment_method: string | null
      status: string
      stripe_payment_id: string | null
      updated_at: string | null
    }
    Insert: {
      amount: number
      application_id?: string | null
      created_at?: string | null
      currency?: string | null
      id?: string
      invoice_number?: string | null
      payment_date?: string | null
      payment_method?: string | null
      status: string
      stripe_payment_id?: string | null
      updated_at?: string | null
    }
    Update: {
      amount?: number
      application_id?: string | null
      created_at?: string | null
      currency?: string | null
      id?: string
      invoice_number?: string | null
      payment_date?: string | null
      payment_method?: string | null
      status: string
      stripe_payment_id?: string | null
      updated_at?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "sponsorship_payments_application_id_fkey"
        columns: ["application_id"]
        isOneToOne: false
        referencedRelation: "sponsorship_applications"
        referencedColumns: ["id"]
      }
    ]
  }
  ticket_types: {
    Row: {
      benefits: Json | null
      capacity: number | null
      created_at: string | null
      currency: string | null
      description: string | null
      event_id: string | null
      id: string
      is_active_in_stripe: boolean | null
      is_recurring: boolean | null
      name: string
      price: number
      recurring_interval: string | null
      sale_end_date: string | null
      sale_start_date: string | null
      status: Enums['ticket_type_status'] | null
      stripe_metadata: Json | null
      stripe_price_id: string | null
      stripe_product_id: string | null
      updated_at: string | null
    }
    Insert: {
      benefits?: Json | null
      capacity?: number | null
      created_at?: string | null
      currency?: string | null
      description?: string | null
      event_id?: string | null
      id?: string
      is_active_in_stripe?: boolean | null
      is_recurring?: boolean | null
      name: string
      price: number
      recurring_interval?: string | null
      sale_end_date?: string | null
      sale_start_date?: string | null
      status?: Enums['ticket_type_status'] | null
      stripe_metadata?: Json | null
      stripe_price_id?: string | null
      stripe_product_id?: string | null
      updated_at?: string | null
    }
    Update: {
      benefits?: Json | null
      capacity?: number | null
      created_at?: string | null
      currency?: string | null
      description?: string | null
      event_id?: string | null
      id?: string
      is_active_in_stripe?: boolean | null
      is_recurring?: boolean | null
      name?: string
      price?: number
      recurring_interval?: string | null
      sale_end_date?: string | null
      sale_start_date?: string | null
      status?: Enums['ticket_type_status'] | null
      stripe_metadata?: Json | null
      stripe_price_id?: string | null
      stripe_product_id?: string | null
      updated_at?: string | null
    }
    Relationships: [
      {
        foreignKeyName: "ticket_types_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "active_events"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "ticket_types_event_id_fkey"
        columns: ["event_id"]
        isOneToOne: false
        referencedRelation: "events"
        referencedColumns: ["id"]
      }
    ]
  }
  tickets: {
    Row: {
      created_at: string | null
      event_id: string | null
      id: string
      metadata: Json | null
      payment_status: Enums['payment_status'] | null
      price: number
      purchase_date: string | null
      quantity: number | null
      status: Enums['ticket_status'] | null
      ticket_type_id: string | null
      tier: Enums['ticket_tier']
      total_amount: number | null
      updated_at: string | null
      user_id: string | null
    }
    Insert: {
      created_at?: string | null
      event_id?: string | null
      id?: string
      metadata?: Json | null
      payment_status?: Enums['payment_status'] | null
      price: number
      purchase_date?: string | null
      quantity?: number | null
      status?: Enums['ticket_status'] | null
      ticket_type_id?: string | null
      tier: Enums['ticket_tier']
      total_amount?: number | null
      updated_at?: string | null
      user_id?: string | null
    }
    Update: {
      created_at?: string | null
      event_id?: string | null
      id?: string
      metadata?: Json | null
      payment_status?: Enums['payment_status'] | null
      price?: number
      purchase_date?: string | null
      quantity?: number | null
      status?: Enums['ticket_status'] | null
      ticket_type_id?: string | null
      tier?: Enums['ticket_tier']
      total_amount?: number | null
      updated_at?: string | null
      user_id?: string | null
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
  user_roles: {
    Row: {
      created_at: string | null
      role: Enums['user_role']
      user_id: string
    }
    Insert: {
      created_at?: string | null
      role: Enums['user_role']
      user_id: string
    }
    Update: {
      created_at?: string | null
      role?: Enums['user_role']
      user_id?: string
    }
    Relationships: []
  }
}

export type TablesInsert = {
  [K in keyof Tables]: Tables[K]['Insert']
}

export type TablesUpdate = {
  [K in keyof Tables]: Tables[K]['Update']
}

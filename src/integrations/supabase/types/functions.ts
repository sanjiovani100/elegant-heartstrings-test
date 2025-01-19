import type { Json } from './json';

export interface Functions {
  check_and_update_promo_code: {
    Args: { 
      p_code: string
      p_event_id: string 
    }
    Returns: {
      is_valid: boolean
      discount_type: string
      discount_value: number
      message: string
    }[]
  }
  check_sponsorship_availability: {
    Args: { 
      level_id: string 
    }
    Returns: boolean
  }
  track_sponsor_engagement: {
    Args: {
      sponsor_id: string
      engagement_type: string
      engagement_data: Json
    }
    Returns: void
  }
}
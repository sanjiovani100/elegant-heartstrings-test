import { Json } from '../database';
import { TicketStatus, PaymentStatus, TicketTier, TicketTypeStatus } from '../enums';

export interface Ticket {
  id: string;
  event_id?: string | null;
  ticket_type_id?: string | null;
  user_id?: string | null;
  tier: TicketTier;
  price: number;
  status?: TicketStatus | null;
  purchase_date?: string | null;
  payment_status?: PaymentStatus | null;
  quantity?: number | null;
  total_amount?: number | null;
  metadata?: Json | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface TicketType {
  id: string;
  event_id?: string | null;
  name: string;
  description?: string | null;
  price: number;
  capacity?: number | null;
  benefits?: Json | null;
  sale_start_date?: string | null;
  sale_end_date?: string | null;
  status?: TicketTypeStatus | null;
  created_at?: string | null;
  updated_at?: string | null;
  stripe_product_id?: string | null;
  stripe_price_id?: string | null;
  currency?: string | null;
  is_recurring?: boolean | null;
  recurring_interval?: string | null;
  stripe_metadata?: Json | null;
  is_active_in_stripe?: boolean | null;
}
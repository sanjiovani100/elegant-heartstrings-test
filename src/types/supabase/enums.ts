export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'declined';
export type AuditAction = 'INSERT' | 'UPDATE' | 'DELETE' | 'SOFT_DELETE';
export type EventStatus = 'draft' | 'published' | 'completed' | 'cancelled';
export type EventCategory = 
  | 'Fashion Show'
  | 'Gala'
  | 'Workshop'
  | 'Exhibition'
  | 'Conference'
  | 'Networking'
  | 'Awards_Ceremony'
  | 'Runway_Show'
  | 'Masterclass'
  | 'Pop_Up_Shop'
  | 'VIP_Reception'
  | 'Industry_Mixer'
  | 'Designer_Showcase'
  | 'Trend_Presentation';
export type MediaStatus = 'draft' | 'published';
export type MediaType = 'gallery' | 'highlights' | 'promotional';
export type MessageStatus = 'sent' | 'delivered' | 'read';
export type NotificationCategory = 'events' | 'tickets' | 'messages' | 'marketing';
export type NotificationType = 'event_update' | 'ticket_purchase' | 'message' | 'system';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type ProfileStatus = 'incomplete' | 'complete';
export type SponsorStatus = 'active' | 'inactive';
export type SponsorshipStatus = 'pending' | 'approved' | 'active' | 'completed';
export type SponsorshipType = 'physical' | 'digital' | 'hybrid';
export type TicketStatus = 'available' | 'reserved' | 'purchased' | 'cancelled';
export type TicketTier = 'general' | 'vip';
export type TicketTypeStatus = 'active' | 'inactive' | 'sold_out';
export type UserRole = 'admin' | 'model' | 'designer' | 'sponsor' | 'visitor';

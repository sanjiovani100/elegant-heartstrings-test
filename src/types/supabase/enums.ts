export const EventCategory = {
  FASHION_SHOW: 'Fashion Show',
  GALA: 'Gala',
  WORKSHOP: 'Workshop',
  EXHIBITION: 'Exhibition',
  CONFERENCE: 'Conference',
  NETWORKING: 'Networking',
  AWARDS_CEREMONY: 'Awards_Ceremony',
  RUNWAY_SHOW: 'Runway_Show',
  MASTERCLASS: 'Masterclass',
  POP_UP_SHOP: 'Pop_Up_Shop',
  VIP_RECEPTION: 'VIP_Reception',
  INDUSTRY_MIXER: 'Industry_Mixer',
  DESIGNER_SHOWCASE: 'Designer_Showcase',
  TREND_PRESENTATION: 'Trend_Presentation'
} as const;

export type EventCategory = typeof EventCategory[keyof typeof EventCategory];

export const EventStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const;

export type EventStatus = typeof EventStatus[keyof typeof EventStatus];

export const MediaStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'published'
} as const;

export type MediaStatus = typeof MediaStatus[keyof typeof MediaStatus];

export const MediaType = {
  GALLERY: 'gallery',
  HIGHLIGHTS: 'highlights',
  PROMOTIONAL: 'promotional'
} as const;

export type MediaType = typeof MediaType[keyof typeof MediaType];

export const ApplicationStatus = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  UNDER_REVIEW: 'under_review',
  APPROVED: 'approved',
  DECLINED: 'declined'
} as const;

export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus];

export const SponsorStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
} as const;

export type SponsorStatus = typeof SponsorStatus[keyof typeof SponsorStatus];

export const SponsorshipStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const;

export type SponsorshipStatus = typeof SponsorshipStatus[keyof typeof SponsorshipStatus];

export const SponsorshipType = {
  PHYSICAL: 'physical',
  DIGITAL: 'digital',
  HYBRID: 'hybrid'
} as const;

export type SponsorshipType = typeof SponsorshipType[keyof typeof SponsorshipType];

export const PaymentStatus = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded'
} as const;

export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];

export const TicketStatus = {
  AVAILABLE: 'available',
  RESERVED: 'reserved',
  PURCHASED: 'purchased',
  CANCELLED: 'cancelled'
} as const;

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

export const TicketTier = {
  GENERAL: 'general',
  VIP: 'vip'
} as const;

export type TicketTier = typeof TicketTier[keyof typeof TicketTier];

export const TicketTypeStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SOLD_OUT: 'sold_out'
} as const;

export type TicketTypeStatus = typeof TicketTypeStatus[keyof typeof TicketTypeStatus];

export const ProfileStatus = {
  INCOMPLETE: 'incomplete',
  COMPLETE: 'complete'
} as const;

export type ProfileStatus = typeof ProfileStatus[keyof typeof ProfileStatus];
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

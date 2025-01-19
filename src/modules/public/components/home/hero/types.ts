import { ReactNode } from 'react';

export interface HeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export interface HeroContentProps {
  title: string;
  subtitle: string;
}

export interface HeroActionsProps {
  onGetTickets?: () => void;
  onSignUp?: () => void;
}

export interface FloatingHeartProps {
  delay: number;
}
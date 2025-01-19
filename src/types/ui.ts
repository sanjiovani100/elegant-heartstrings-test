import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

export interface ButtonProps extends ShadcnButtonProps {
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}
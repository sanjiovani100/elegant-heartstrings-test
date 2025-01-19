/**
 * Interface for highlight item data
 */
export interface HighlightItem {
  title: string;
  description: string;
  image: string;
  link?: string;
  category?: string;
  tags?: string[];
}

/**
 * Props for HighlightCard component
 */
export interface HighlightCardProps extends HighlightItem {
  onLearnMore?: () => void;
  className?: string;
  isLoading?: boolean;
  testId?: string;
}

/**
 * Props for Highlights container component
 */
export interface HighlightsProps {
  title?: string;
  subtitle?: string;
  items: HighlightItem[];
  className?: string;
  testId?: string;
}

/**
 * Props for navigation controls
 */
export interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  activeIndex: number;
  total: number;
  disabled?: boolean;
  className?: string;
  testId?: string;
}

/**
 * Props for pagination component
 */
export interface PaginationProps {
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
  className?: string;
  testId?: string;
}
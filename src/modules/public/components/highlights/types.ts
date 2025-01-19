/**
 * Interface for highlight item data
 */
export interface HighlightItem {
  title: string;
  description: string;
  image: string;
}

/**
 * Props for HighlightCard component
 */
export interface HighlightCardProps extends HighlightItem {
  onLearnMore?: () => void;
  className?: string;
  isLoading?: boolean;
}

/**
 * Props for Highlights container component
 */
export interface HighlightsProps {
  title?: string;
  subtitle?: string;
  items: HighlightItem[];
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
}

/**
 * Props for pagination component
 */
export interface PaginationProps {
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
}
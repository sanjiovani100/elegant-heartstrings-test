/**
 * Interface for showcase item data
 */
export interface ShowcaseItem {
  image: string;
  title: string;
  designer: string;
  description: string;
}

/**
 * Props for ShowcaseItem component including handlers
 */
export interface ShowcaseItemProps extends ShowcaseItem {
  onExplore?: () => void;
  onDetails?: () => void;
}

/**
 * Props for Showcase component
 */
export interface ShowcaseProps {
  items: ShowcaseItem[];
}
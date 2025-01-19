export interface ShowcaseItem {
  image: string;
  title: string;
  designer: string;
  description: string;
}

export interface ShowcaseItemProps extends ShowcaseItem {
  onExplore?: () => void;
  onDetails?: () => void;
}

export interface ShowcaseProps {
  items: ShowcaseItem[];
}
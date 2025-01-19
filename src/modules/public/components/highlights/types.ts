export interface HighlightCardProps {
  title: string;
  description: string;
  image: string;
}

export interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  activeIndex: number;
  total: number;
}

export interface PaginationProps {
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
}
import { Skeleton } from "@/components/ui/skeleton";

interface ImageSkeletonProps {
  className?: string;
}

export const ImageSkeleton = ({ className }: ImageSkeletonProps) => {
  return <Skeleton className={className} />;
};
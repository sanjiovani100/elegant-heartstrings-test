import { Skeleton } from "@/components/ui/skeleton";

interface ImageSkeletonProps {
  className?: string;
}

const ImageSkeleton = ({ className }: ImageSkeletonProps) => {
  return <Skeleton className={className} />;
};

export default ImageSkeleton;
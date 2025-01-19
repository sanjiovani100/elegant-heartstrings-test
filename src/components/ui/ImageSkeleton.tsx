import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
}

const ImageSkeleton = ({ className }: ImageSkeletonProps) => {
  return (
    <div 
      className={cn(
        "animate-pulse bg-gray-200 rounded-lg",
        className
      )} 
    />
  );
};

export default ImageSkeleton;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShowcaseItemProps } from "./types";

export const ShowcaseItem = ({
  image,
  title,
  designer,
  description,
  onExplore,
  onDetails
}: ShowcaseItemProps) => {
  return (
    <Card className="relative bg-black border-gray-800 overflow-hidden group">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold font-playfair text-white mb-2 group-hover:text-[#F0F0F0] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-[#F0F0F0] mb-2 font-playfair">
            {designer}
          </p>
          <p className="text-[#F0F0F0] line-clamp-2 text-sm font-montserrat">
            {description}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 bg-[#F0F0F0] hover:bg-white text-black transition-colors duration-300"
            onClick={onExplore}
          >
            Explore
          </Button>
          <Button 
            variant="gradient"
            className="flex-1"
            onClick={onDetails}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LingeriePieceProps {
  image: string;
  title: string;
  designer: string;
  description: string;
}

const LingeriePiece = ({
  image,
  title,
  designer,
  description,
}: LingeriePieceProps) => {
  return (
    <Card className="relative bg-black border-gray-800 min-h-[600px] flex flex-col">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      <CardContent className="flex-1 p-6 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-2xl font-bold font-montserrat text-white mb-2 group-hover:text-fashionista-pink transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-fashionista-pink mb-2 font-playfair">
            {designer}
          </p>
          <p className="text-gray-300 line-clamp-2 text-sm">
            {description}
          </p>
        </div>
        
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="outline" 
            className="flex-1 bg-fashionista-grey hover:bg-fashionista-grey/80 text-white border-fashionista-pink hover:text-fashionista-pink transition-all duration-300"
          >
            Explore
          </Button>
          <Button 
            className="flex-1 bg-fashionista-red hover:bg-fashionista-red/80 text-white transition-all duration-300"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LingeriePiece;
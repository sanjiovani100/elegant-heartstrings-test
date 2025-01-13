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
    <Card className="relative overflow-hidden group bg-black border-gray-800 h-[600px]">
      <div className="relative h-[70%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 h-[30%] flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-white mb-1 group-hover:text-fashionista-pink transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-fashionista-pink mb-2 font-playfair">
            {designer}
          </p>
          <p className="text-gray-300 line-clamp-2 text-sm">
            {description}
          </p>
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button 
            variant="outline" 
            className="flex-1 bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-pink hover:text-black transition-all duration-300"
          >
            Explore
          </Button>
          <Button 
            className="flex-1 bg-fashionista-red hover:bg-fashionista-red/80 transition-all duration-300"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LingeriePiece;
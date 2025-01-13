import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface LingeriePieceProps {
  image: string;
  title: string;
  designer: string;
  description: string;
  favorites?: number;
  isTrending?: boolean;
}

const LingeriePiece = ({
  image,
  title,
  designer,
  description,
  favorites,
  isTrending,
}: LingeriePieceProps) => {
  return (
    <Card className="relative overflow-hidden group bg-black border-gray-800 h-[600px]">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-[70%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90" />
      </div>
      
      <div className="absolute top-4 right-4 flex gap-2">
        {isTrending && (
          <Badge className="bg-fashionista-red text-white">
            Trending Now
          </Badge>
        )}
        {favorites && (
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-gray-600">
            <Heart className="w-3 h-3 mr-1 text-fashionista-pink" />
            {favorites}+ Favorites
          </Badge>
        )}
      </div>

      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="text-2xl font-bold font-montserrat text-white mb-1">
          {title}
        </h3>
        <p className="text-lg text-fashionista-pink mb-2 font-playfair">
          {designer}
        </p>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex gap-3 justify-center">
          <Button 
            variant="outline" 
            className="bg-fashionista-pink/10 border-fashionista-pink text-fashionista-pink hover:bg-fashionista-pink hover:text-black transition-all duration-300"
          >
            Explore Collection
          </Button>
          <Button 
            className="bg-fashionista-red hover:bg-fashionista-red/80 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LingeriePiece;
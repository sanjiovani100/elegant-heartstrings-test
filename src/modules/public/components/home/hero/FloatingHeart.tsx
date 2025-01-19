import { Heart } from "lucide-react";
import { FloatingHeartProps } from "./types";

export const FloatingHeart = ({ delay }: FloatingHeartProps) => (
  <div 
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      opacity: 0.3
    }}
  >
    <Heart className="text-white w-4 h-4" />
  </div>
);
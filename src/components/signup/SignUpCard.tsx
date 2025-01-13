import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SignUpCardProps {
  title: string;
  description: string;
  image: string;
  accentColor: string;
  link: string;
  trending?: boolean;
  className?: string;
}

const SignUpCard = ({
  title,
  description,
  image,
  accentColor,
  link,
  trending,
  className
}: SignUpCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden bg-black border-gray-800 transition-all duration-300",
        "hover:shadow-glow hover:scale-[1.02] hover:border-fashionista-pink",
        "group cursor-pointer",
        className
      )}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {trending && (
          <div className="absolute top-4 right-4 bg-fashionista-red px-4 py-1 rounded-full">
            <span className="text-sm font-montserrat text-white">Trending</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="text-2xl font-playfair text-white mb-4">{title}</h3>
        <p className="text-gray-300 font-montserrat mb-6">{description}</p>
        <Button
          className={cn(
            "w-full transition-all duration-300",
            {
              'bg-fashionista-red hover:bg-fashionista-red/90': accentColor === 'fashionista-red',
              'bg-fashionista-pink hover:bg-fashionista-pink/90': accentColor === 'fashionista-pink',
              'bg-fashionista-grey hover:bg-fashionista-grey/90': accentColor === 'fashionista-grey',
            }
          )}
          onClick={() => window.location.href = link}
        >
          Sign Up Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
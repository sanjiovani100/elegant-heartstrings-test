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
  className?: string;
}

const SignUpCard = ({
  title,
  description,
  image,
  accentColor,
  link,
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
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-playfair text-white">{title}</h3>
        <p className="text-gray-300 font-montserrat text-sm md:text-base">{description}</p>
        <Button
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white transition-all duration-300 mt-4"
          onClick={() => window.location.href = link}
        >
          Sign Up Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
import { HeroContentProps } from "./types";

export const HeroContent = ({ title, subtitle }: HeroContentProps) => {
  return (
    <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-6 animate-fade-up drop-shadow-lg leading-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-[#F0F0F0] mb-8 animate-fade-up delay-100 font-montserrat">
        {subtitle}
      </p>
    </div>
  );
};
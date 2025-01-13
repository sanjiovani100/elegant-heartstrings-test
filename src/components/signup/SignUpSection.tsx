import React from 'react';
import SignUpCard from './SignUpCard';
import { cn } from '@/lib/utils';

const signUpOptions = [
  {
    title: 'Register as a Model',
    description: 'Join the runway and showcase your talent at Medellín\'s most glamorous event.',
    image: '/lovable-uploads/353c7c99-abfc-4cb6-8c71-febb2f53f43e.png',
    accentColor: 'fashionista-red',
    link: '/signup/model'
  },
  {
    title: 'Sign Up as a Designer',
    description: 'Showcase your lingerie designs to an exclusive audience of fashion enthusiasts.',
    image: '/lovable-uploads/6463082c-0155-4faa-80b7-3a65c079d12f.png',
    accentColor: 'fashionista-red',
    link: '/signup/designer'
  },
  {
    title: 'Become a Sponsor',
    description: 'Partner with us to reach luxury fashion consumers and industry leaders.',
    image: '/lovable-uploads/b8d53a64-c5a1-45cd-a961-a84d40d8cd74.png',
    accentColor: 'fashionista-red',
    link: '/signup/sponsor'
  }
];

const SignUpSection = () => {
  return (
    <section className="w-full py-20 bg-black" id="signup">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-white text-center mb-4">
          Join the Fashionistas Experience!
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 font-montserrat">
          Be part of Medellín's most anticipated fashion event
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signUpOptions.map((option, index) => (
            <SignUpCard
              key={index}
              {...option}
              className={cn(
                "opacity-0",
                "animate-fade-up",
                { "animation-delay-100": index === 0 },
                { "animation-delay-200": index === 1 },
                { "animation-delay-300": index === 2 }
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
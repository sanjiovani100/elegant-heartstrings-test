import React from 'react';
import SignUpCard from './SignUpCard';
import { cn } from '@/lib/utils';

const signUpOptions = [
  {
    title: 'Register as a Model',
    description: 'Join the runway and showcase your talent at Medellín\'s most glamorous event.',
    image: '/models-signup.jpg',
    accentColor: 'fashionista-red',
    link: '/signup/model',
    trending: true
  },
  {
    title: 'Sign Up as a Designer',
    description: 'Showcase your lingerie designs to an exclusive audience of fashion enthusiasts.',
    image: '/designers-signup.jpg',
    accentColor: 'fashionista-pink',
    link: '/signup/designer'
  },
  {
    title: 'Become a Sponsor',
    description: 'Partner with us to reach luxury fashion consumers and industry leaders.',
    image: '/sponsors-signup.jpg',
    accentColor: 'fashionista-grey',
    link: '/signup/sponsor'
  }
];

const SignUpSection = () => {
  return (
    <section className="w-full py-20 bg-black">
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const TicketHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] flex flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
        <img 
          src="/hero2.jpg" 
          alt="Fashion Event" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container with proper spacing */}
      <div className="container relative z-10 px-4 pt-[calc(var(--navbar-height)+var(--banner-height))] pb-[var(--section-spacing)] space-y-8">
        {/* Early Bird Banner */}
        <div className="fixed top-[var(--navbar-height)] left-0 right-0 z-40 bg-black/80 backdrop-blur-sm py-2">
          <div className="container">
            <Badge 
              variant="secondary" 
              className="bg-fashionista-pink text-white px-6 py-2 text-sm md:text-lg mx-auto block w-fit animate-fade-up"
            >
              Early Bird Tickets Available
            </Badge>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center space-y-6 animate-fade-up">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-playfair font-bold text-white">
            Fashionistas Valentine's
            <span className="block text-fashionista-pink">Runway Event</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-montserrat">
            Experience the most glamorous night of fashion in Medellín
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white animate-fade-up">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-fashionista-pink" />
            <span className="font-montserrat text-sm md:text-base">February 14, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-fashionista-pink" />
            <span className="font-montserrat text-sm md:text-base">250+ Attendees</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-fashionista-pink" />
            <span className="font-montserrat text-sm md:text-base">VIP Experience</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-8 animate-fade-up">
          <CountdownTimer />
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-4 pt-8 animate-fade-up">
          <Button 
            size="lg"
            className="bg-fashionista-red hover:bg-fashionista-red/90 text-white text-lg px-8 py-6"
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Tickets
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TicketHero;
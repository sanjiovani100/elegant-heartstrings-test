import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const TicketHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
        <img 
          src="/hero2.jpg" 
          alt="Fashion Event" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 space-y-8">
        {/* Early Bird Banner */}
        <div className="flex justify-center">
          <Badge 
            variant="secondary" 
            className="bg-fashionista-pink text-white px-6 py-2 text-lg animate-fade-up"
          >
            Early Bird Tickets Available
          </Badge>
        </div>

        {/* Main Title */}
        <div className="text-center space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white">
            Fashionistas Valentine's
            <span className="block text-fashionista-pink">Runway Event</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-montserrat">
            Experience the most glamorous night of fashion in Medellín
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-white animate-fade-up">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-fashionista-pink" />
            <span className="font-montserrat">February 14, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-fashionista-pink" />
            <span className="font-montserrat">250+ Attendees</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-fashionista-pink" />
            <span className="font-montserrat">VIP Experience</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-8 animate-fade-up">
          <CountdownTimer />
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 pt-8 animate-fade-up">
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
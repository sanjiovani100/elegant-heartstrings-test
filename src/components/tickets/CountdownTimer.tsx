import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-4 md:mx-6 relative group">
    <div className="text-3xl md:text-4xl font-bold font-montserrat text-white">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-2">
      {label}
    </div>
    <div className="absolute inset-0 bg-white/5 rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
  </div>
);

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-02-14T00:00:00");
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4" aria-label="Countdown to event start">
      <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-black/30">
        <div className={cn(
          "flex flex-wrap justify-center items-center gap-2 md:gap-4",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/20 before:to-transparent before:pointer-events-none"
        )}>
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="hidden md:block text-2xl text-gray-600 mx-2">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="hidden md:block text-2xl text-gray-600 mx-2">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="hidden md:block text-2xl text-gray-600 mx-2">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          Don't miss out on Medellín's most glamorous event!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
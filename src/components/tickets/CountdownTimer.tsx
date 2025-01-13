import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-02-14T00:00:00"); // Valentine's Day
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
    <div className="text-center animate-pulse">
      <p className="text-fashionista-pink font-montserrat mb-2">
        Early Bird Ends In
      </p>
      <div className="flex justify-center gap-4 text-white font-montserrat">
        <div>
          <span className="text-2xl font-bold">{timeLeft.days}</span>
          <p className="text-xs text-fashionista-grey">Days</p>
        </div>
        <div>
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
          <p className="text-xs text-fashionista-grey">Hours</p>
        </div>
        <div>
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
          <p className="text-xs text-fashionista-grey">Minutes</p>
        </div>
        <div>
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
          <p className="text-xs text-fashionista-grey">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
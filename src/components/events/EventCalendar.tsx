import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const EventCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg bg-white/5 p-6"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat text-white mb-4">
              Event Categories
            </h3>
            <div className="space-y-2">
              {["Runway Shows", "VIP Parties", "Networking Events", "Workshops"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="w-full justify-start text-left hover:text-fashionista-red hover:border-fashionista-red"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const scheduleItems = [
  {
    time: "9:00 AM",
    event: "Check-in & Registration",
    description: "Arrive at venue, collect credentials",
  },
  {
    time: "10:00 AM",
    event: "Hair & Makeup",
    description: "Professional styling session",
  },
  {
    time: "12:00 PM",
    event: "Rehearsal",
    description: "Runway practice and choreography",
  },
  {
    time: "2:00 PM",
    event: "Break & Light Lunch",
    description: "Refreshments provided",
  },
  {
    time: "4:00 PM",
    event: "Final Preparations",
    description: "Outfit fittings and final touches",
  },
  {
    time: "6:00 PM",
    event: "Show Time",
    description: "Main event begins",
  },
];

const ModelSchedule = () => {
  return (
    <section className="py-16 px-4 bg-gray-50/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-montserrat text-center mb-8">
          Event Schedule
        </h2>
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 text-fashionista-red">
                  <Clock className="h-5 w-5 mb-1" />
                  <span className="text-sm font-medium">{item.time}</span>
                </div>
                <div>
                  <h3 className="font-montserrat text-lg mb-1">{item.event}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelSchedule;
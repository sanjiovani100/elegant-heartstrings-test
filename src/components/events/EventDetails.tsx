import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Event Information */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white">
              Valentine's Fashion Extravaganza
            </h2>
            <div className="space-y-4 text-[#F0F0F0]">
              <p className="text-lg">
                Join us for an unforgettable evening of fashion, elegance, and romance at Medellín's most anticipated Valentine's event.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-fashionista-red">Date:</span>
                  <span>February 14th, 2024</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-fashionista-red">Time:</span>
                  <span>7:00 PM - 11:00 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-fashionista-red">Dress Code:</span>
                  <span>Formal Attire</span>
                </li>
              </ul>
            </div>
            <Button 
              className="bg-fashionista-red hover:bg-fashionista-red/90 text-white"
            >
              Reserve Your Spot
            </Button>
          </div>

          {/* Event Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/hero1.jpg"
              alt="Valentine's Fashion Event"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
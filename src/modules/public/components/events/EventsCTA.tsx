import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EventsCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-fashionista-red/20" />
      
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/hero2.jpg"
              alt="Fashion Event"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-playfair">
              Ready to Create Your Fashion Event?
            </h2>
            
            <p className="text-lg text-gray-300 font-inter">
              Transform your vision into reality. Join us in creating unforgettable fashion experiences that captivate and inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-fashionista-red hover:bg-fashionista-red/90 text-white"
                onClick={() => navigate("/admin/events/create")}
              >
                Create Event
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-fashionista-pink text-fashionista-pink hover:bg-fashionista-pink hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCTA;
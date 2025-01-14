import { Button } from "@/components/ui/button";

const VenueInfo = () => {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Venue Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Venue Details */}
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg space-y-4">
              <h3 className="text-2xl font-montserrat text-white">
                Skybox Medellín
              </h3>
              <p className="text-[#F0F0F0]">
                Experience luxury at its finest in our exclusive venue with panoramic city views.
              </p>
              <ul className="space-y-3 text-[#F0F0F0]">
                <li>• VIP Lounge Access</li>
                <li>• Secure Parking Available</li>
                <li>• Wheelchair Accessible</li>
                <li>• Full-Service Bar</li>
              </ul>
              <Button variant="outline" className="mt-4">
                View Floor Plan
              </Button>
            </div>
          </div>

          {/* Venue Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/hero3.jpg"
              alt="Skybox Medellín Venue"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;
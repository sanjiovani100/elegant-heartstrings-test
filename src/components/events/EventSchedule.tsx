const EventSchedule = () => {
  const schedule = [
    {
      time: "7:00 PM",
      event: "Welcome Reception",
      description: "Registration and champagne welcome"
    },
    {
      time: "8:00 PM",
      event: "Opening Ceremony",
      description: "Introduction and special guest appearances"
    },
    {
      time: "8:30 PM",
      event: "Main Fashion Show",
      description: "Featuring collections from top designers"
    },
    {
      time: "10:00 PM",
      event: "VIP After-Party",
      description: "Networking and celebration"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Event Schedule
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l border-fashionista-red last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-fashionista-red" />
                
                {/* Content */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <span className="text-fashionista-red font-semibold">
                    {item.time}
                  </span>
                  <h3 className="text-xl text-white mt-2 font-montserrat">
                    {item.event}
                  </h3>
                  <p className="text-[#F0F0F0] mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
const SponsorBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-fashionista-red/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white">
              Why Sponsor Fashionistas Valentine's Event?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-200 font-inter">
                Connect with an exclusive audience of fashion industry leaders, designers, and influencers in an intimate setting designed for meaningful interactions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-fashionista-red">•</span>
                  <span>Premium brand visibility throughout the event venue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-fashionista-red">•</span>
                  <span>VIP networking opportunities with industry leaders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-fashionista-red">•</span>
                  <span>Strategic product placement and activation opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="/lovable-uploads/6463082c-0155-4faa-80b7-3a65c079d12f.png"
              alt="Sponsor Benefits"
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorBenefits;
const PastEventsGallery = () => {
  const images = [
    { src: "/hero1.jpg", alt: "Fashion Show 2023", title: "Summer Collection Launch" },
    { src: "/hero2.jpg", alt: "VIP Gala Night", title: "Winter Gala" },
    { src: "/hero3.jpg", alt: "Designer Showcase", title: "Spring Preview" }
  ];

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Past Events Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-montserrat mb-2">{image.title}</h3>
                <p className="text-sm text-[#F0F0F0]">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsGallery;
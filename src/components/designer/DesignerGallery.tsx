const images = [
  "/lovable-uploads/5e0ecc00-218e-40df-9160-ea06d3a9627c.png",
  "/lovable-uploads/6463082c-0155-4faa-80b7-3a65c079d12f.png",
  "/lovable-uploads/b8d53a64-c5a1-45cd-a961-a84d40d8cd74.png",
  "/lovable-uploads/a957025d-25d4-4b39-9e9f-15c9f20394c6.png"
];

const DesignerGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
          Previous Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden">
              <img
                src={image}
                alt={`Designer collection ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerGallery;
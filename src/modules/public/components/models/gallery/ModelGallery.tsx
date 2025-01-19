import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const modelPhotos = [
  {
    id: 1,
    url: "/hero1.jpg",
    caption: "Fashion Week Runway",
  },
  {
    id: 2,
    url: "/hero2.jpg",
    caption: "Editorial Photoshoot",
  },
  {
    id: 3,
    url: "/hero3.jpg",
    caption: "Behind the Scenes",
  },
];

const ModelGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % modelPhotos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + modelPhotos.length) % modelPhotos.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-montserrat text-center mb-8">
          Model Gallery
        </h2>
        <div className="relative">
          <Card className="overflow-hidden">
            <div className="aspect-[16/9] relative">
              <img
                src={modelPhotos[currentIndex].url}
                alt={modelPhotos[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-center">{modelPhotos[currentIndex].caption}</p>
              </div>
            </div>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelGallery;
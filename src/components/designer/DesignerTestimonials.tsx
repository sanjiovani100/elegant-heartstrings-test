import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sofia Martinez",
    role: "Fashion Designer",
    quote: "Participating in the Fashionistas Valentine's Event was a game-changer for my brand. The exposure and connections I made were invaluable.",
    image: "/lovable-uploads/c073624c-5bbf-4b28-a98a-e16d7aa2b8cf.png"
  },
  {
    name: "Carlos Rodriguez",
    role: "Creative Director",
    quote: "The event provided an incredible platform to showcase my latest collection. The organization and support were outstanding.",
    image: "/lovable-uploads/9d7f93fc-b3ee-4a60-8e66-a7dd53721a75.png"
  }
];

const DesignerTestimonials = () => {
  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
          Designer Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/50 border border-fashionista-grey/20 p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-montserrat text-lg">{testimonial.name}</h3>
                  <p className="text-fashionista-grey text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#F0F0F0] italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerTestimonials;
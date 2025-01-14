import { Button } from "@/components/ui/button";
import { Camera, User, Users, Award, Star, Heart, MessageSquare, FileText, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import ModelTestimonialCarousel from "@/components/models/ModelTestimonialCarousel";
import ModelSignUpForm from "@/components/models/ModelSignUpForm";
import ModelFAQ from "@/components/models/ModelFAQ";
import { cn } from "@/lib/utils";
import HighlightCard from "@/components/highlights/HighlightCard";
import ProcessSteps from "@/components/process/ProcessSteps";

const Models = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-fashionista-red" />,
      title: "Industry Exposure",
      description: "Connect with top designers, brands, and industry leaders.",
      image: "/lovable-uploads/c073624c-5bbf-4b28-a98a-e16d7aa2b8cf.png"
    },
    {
      icon: <Camera className="w-8 h-8 text-fashionista-red" />,
      title: "Professional Portfolio",
      description: "Get professional runway and photoshoot opportunities.",
      image: "/lovable-uploads/5e0ecc00-218e-40df-9160-ea06d3a9627c.png"
    },
    {
      icon: <Users className="w-8 h-8 text-fashionista-red" />,
      title: "Networking",
      description: "Build valuable connections within the fashion industry.",
      image: "/lovable-uploads/a957025d-25d4-4b39-9e9f-15c9f20394c6.png"
    },
  ];

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Application",
      description: "Fill out our detailed application form"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Portfolio",
      description: "Submit your photos or portfolio"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Selection",
      description: "Attend the selection process"
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero2.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair leading-tight animate-fade-up">
              Step Into the Spotlight at Fashionistas Valentine's Event
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-inter animate-fade-up delay-100">
              Join the ultimate platform for showcasing your talent to top designers, sponsors, and media.
            </p>
            <div className="space-x-4 animate-fade-up delay-200">
              <Button 
                size="lg"
                className="bg-fashionista-red hover:bg-fashionista-red/90 text-white px-8 py-6"
              >
                Apply to Be a Model
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
            Why Join as a Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <HighlightCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                image={benefit.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-20 px-4 bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-16">
            How to Participate
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
            Success Stories
          </h2>
          <ModelTestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
            Frequently Asked Questions
          </h2>
          <ModelFAQ />
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
            Apply Now
          </h2>
          <ModelSignUpForm />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Models;

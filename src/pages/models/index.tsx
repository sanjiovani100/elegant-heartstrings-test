import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import ModelHero from "@/components/models/ModelHero";
import ModelBenefits from "@/components/models/ModelBenefits";
import ModelTestimonialCarousel from "@/components/models/ModelTestimonialCarousel";
import ModelSignUpForm from "@/components/models/ModelSignUpForm";
import ModelFAQ from "@/components/models/ModelFAQ";
import ProcessSteps from "@/components/process/ProcessSteps";
import { useToast } from "@/hooks/use-toast";

const ModelsPage = () => {
  const { toast } = useToast();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <ModelHero />

      {/* Benefits Section */}
      <ModelBenefits />

      {/* How to Participate Section */}
      <section className="py-20 px-4 bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-16">
            How to Participate
          </h2>
          <ProcessSteps 
            steps={[
              {
                title: "Submit Application",
                description: "Fill out our detailed application with your portfolio and experience.",
                icon: "ClipboardList"
              },
              {
                title: "Initial Review",
                description: "Our team will review your application and portfolio.",
                icon: "CheckSquare"
              },
              {
                title: "Casting & Selection",
                description: "Selected candidates will be invited for a casting session.",
                icon: "Users"
              }
            ]}
          />
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

export default ModelsPage;
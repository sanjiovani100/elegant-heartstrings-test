import PublicLayout from "@/modules/public/layouts/PublicLayout";
import ModelHero from "@/modules/public/components/models/hero/ModelHero";
import ModelBenefits from "@/modules/public/components/models/benefits/ModelBenefits";
import ModelTestimonialCarousel from "@/modules/public/components/models/testimonials/ModelTestimonialCarousel";
import ModelSignUpForm from "@/modules/public/components/models/form/ModelSignUpForm";
import ModelFAQ from "@/modules/public/components/models/faq/ModelFAQ";
import ProcessSteps from "@/components/process/ProcessSteps";

const ModelsPage = () => {
  return (
    <PublicLayout>
      <main className="min-h-screen bg-black text-white">
        <ModelHero />
        
        <section id="model-benefits" className="scroll-mt-20">
          <ModelBenefits />
        </section>

        {/* How to Participate Section */}
        <section className="py-20 px-4 bg-white/5 relative overflow-hidden scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-16">
              How to Participate
            </h2>
            <ProcessSteps />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
              Success Stories
            </h2>
            <ModelTestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white/5 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
              Frequently Asked Questions
            </h2>
            <ModelFAQ />
          </div>
        </section>

        {/* Sign Up Section */}
        <section className="py-20 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-12">
              Apply Now
            </h2>
            <ModelSignUpForm />
          </div>
        </section>
      </main>
    </PublicLayout>
  );
};

export default ModelsPage;
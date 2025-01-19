import { Suspense } from "react";
import ErrorBoundary from "../../components/models/ErrorBoundary";
import ModelHero from "../../components/models/hero/ModelHero";
import ModelBenefits from "../../components/models/benefits/ModelBenefits";
import ModelGallery from "../../components/models/gallery/ModelGallery";
import ModelSchedule from "../../components/models/schedule/ModelSchedule";
import ModelRequirements from "../../components/models/requirements/ModelRequirements";
import ModelFAQ from "../../components/models/faq/ModelFAQ";
import ModelTestimonialCarousel from "../../components/models/testimonials/ModelTestimonialCarousel";
import ModelSignUpForm from "../../components/models/form/ModelSignUpForm";
import ImageSkeleton from "../../components/models/ImageSkeleton";

const ModelsPage = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Suspense fallback={<ImageSkeleton className="w-full h-[60vh]" />}>
          <ModelHero />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading benefits...</div>}>
          <ModelBenefits />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading gallery...</div>}>
          <ModelGallery />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading schedule...</div>}>
          <ModelSchedule />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading requirements...</div>}>
          <ModelRequirements />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading testimonials...</div>}>
          <ModelTestimonialCarousel />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading FAQ...</div>}>
          <ModelFAQ />
        </Suspense>
        
        <section id="apply" className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
          <ErrorBoundary>
            <ModelSignUpForm />
          </ErrorBoundary>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ModelsPage;
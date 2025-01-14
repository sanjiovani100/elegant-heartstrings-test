import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import DesignerHero from "@/components/designer/DesignerHero";
import DesignerBenefits from "@/components/designer/DesignerBenefits";
import ProcessSteps from "@/components/process/ProcessSteps";
import DesignerTestimonials from "@/components/designer/DesignerTestimonials";
import DesignerGallery from "@/components/designer/DesignerGallery";
import DesignerForm from "@/components/designer/DesignerForm";

const Designer = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <DesignerHero />
      <DesignerBenefits />
      <ProcessSteps 
        title="How to Showcase Your Collection"
        steps={[
          {
            title: "Submit Application",
            description: "Fill out our detailed application form with your brand information and vision.",
            icon: "FileText"
          },
          {
            title: "Share Portfolio",
            description: "Upload your portfolio showcasing your best work and collection concepts.",
            icon: "Image"
          },
          {
            title: "Collaborate with Us",
            description: "Work with our team to perfect your runway presentation and showcase details.",
            icon: "Users"
          }
        ]}
      />
      <DesignerTestimonials />
      <DesignerGallery />
      <DesignerForm />
      <Footer />
    </main>
  );
};

export default Designer;
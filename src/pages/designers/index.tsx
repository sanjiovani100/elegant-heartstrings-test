import DesignerHero from "@/components/designer/DesignerHero";
import DesignerBenefits from "@/components/designer/DesignerBenefits";
import DesignerGallery from "@/components/designer/DesignerGallery";
import DesignerTestimonials from "@/components/designer/DesignerTestimonials";
import DesignerForm from "@/components/designer/DesignerForm";
import ProcessSteps from "@/components/process/ProcessSteps";
import { useToast } from "@/hooks/use-toast";

const DesignersPage = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-black text-white">
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
      <DesignerGallery />
      <DesignerTestimonials />
      <DesignerForm />
    </div>
  );
};

export default DesignersPage;
import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorBenefits from "@/components/sponsors/SponsorBenefits";
import SponsorLevels from "@/components/sponsors/SponsorLevels";
import ProcessSteps from "@/components/process/ProcessSteps";
import SponsorTestimonials from "@/components/sponsors/SponsorTestimonials";
import SponsorGallery from "@/components/sponsors/SponsorGallery";
import SponsorForm from "@/components/sponsors/SponsorForm";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <SponsorHero />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Link to="/sponsors/apply">
            <Button className="bg-fashionista-red hover:bg-fashionista-red/90 text-white text-lg px-8 py-6">
              Apply to Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
      <SponsorBenefits />
      <SponsorLevels />
      <ProcessSteps
        title="How to Become a Sponsor"
        steps={[
          {
            title: "Choose Your Level",
            description: "Select the sponsorship tier that best aligns with your brand's goals and budget.",
            icon: "Sparkles"
          },
          {
            title: "Submit Details",
            description: "Provide your company information and branding assets through our simple form.",
            icon: "ClipboardList"
          },
          {
            title: "Finalize Partnership",
            description: "Our team will work with you to customize and perfect your sponsorship package.",
            icon: "Handshake"
          }
        ]}
      />
      <SponsorTestimonials />
      <SponsorGallery />
      <SponsorForm />
      <Footer />
    </main>
  );
};

export default Sponsors;
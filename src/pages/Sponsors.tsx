import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorBenefits from "@/components/sponsors/SponsorBenefits";
import SponsorLevels from "@/components/sponsors/SponsorLevels";
import ProcessSteps from "@/components/process/ProcessSteps";
import SponsorTestimonials from "@/components/sponsors/SponsorTestimonials";
import SponsorGallery from "@/components/sponsors/SponsorGallery";
import SponsorForm from "@/components/sponsors/SponsorForm";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";

const Sponsors = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <SponsorHero />
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
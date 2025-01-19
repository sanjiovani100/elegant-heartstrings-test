import PublicLayout from "@/modules/public/layouts/PublicLayout";
import Hero from "@/modules/public/components/home/hero";
import Highlights from "@/modules/public/components/highlights/Highlights";
import Showcase from "@/modules/public/components/home/showcase";
import Tickets from "@/modules/public/components/tickets/Tickets";
import SignUpSection from "@/modules/public/components/signup/SignUpSection";
import SponsorShowcase from "@/modules/public/components/sponsors/SponsorShowcase";

const HomePage = () => {
  return (
    <PublicLayout>
      <Hero 
        title="Fashionistas: A Night of Glamour & Fashion"
        subtitle="Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show."
      />
      <Highlights />
      <Showcase />
      <Tickets />
      <SignUpSection />
      <SponsorShowcase />
    </PublicLayout>
  );
};

export default HomePage;
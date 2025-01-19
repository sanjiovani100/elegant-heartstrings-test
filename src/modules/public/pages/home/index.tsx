import PublicLayout from "@/modules/public/layouts/PublicLayout";
import Hero from "@/components/Hero";
import Highlights from "@/modules/public/components/highlights/Highlights";
import LingerieShowcase from "@/components/LingerieShowcase";
import Tickets from "@/components/tickets/Tickets";
import SignUpSection from "@/modules/public/components/signup/SignUpSection";
import SponsorShowcase from "@/modules/public/components/sponsors/SponsorShowcase";

const HomePage = () => {
  return (
    <PublicLayout>
      <Hero />
      <Highlights />
      <LingerieShowcase />
      <Tickets />
      <SignUpSection />
      <SponsorShowcase />
    </PublicLayout>
  );
};

export default HomePage;
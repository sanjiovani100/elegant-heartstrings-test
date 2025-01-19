import PublicLayout from "@/modules/public/layouts/PublicLayout";
import Hero from "@/modules/public/components/home/Hero";
import Highlights from "@/modules/public/components/home/Highlights";
import LingerieShowcase from "@/modules/public/components/home/LingerieShowcase";
import Tickets from "@/components/tickets/Tickets";
import SignUpSection from "@/modules/public/components/signup/SignUpSection";
import SponsorShowcase from "@/modules/public/components/sponsors/SponsorShowcase";

const Index = () => {
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

export default Index;
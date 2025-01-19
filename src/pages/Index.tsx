import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import LingerieShowcase from "@/components/LingerieShowcase";
import Tickets from "@/components/tickets/Tickets";
import SignUpSection from "@/modules/public/components/signup/SignUpSection";
import SponsorShowcase from "@/modules/public/components/sponsors/SponsorShowcase";
import Footer from "@/components/footer/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <LingerieShowcase />
      <Tickets />
      <SignUpSection />
      <SponsorShowcase />
      <Footer />
    </main>
  );
};

export default Index;
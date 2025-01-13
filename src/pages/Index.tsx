import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import LingerieShowcase from "@/components/LingerieShowcase";
import Tickets from "@/components/tickets/Tickets";
import SignUpSection from "@/components/signup/SignUpSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <LingerieShowcase />
      <Tickets />
      <SignUpSection />
    </main>
  );
};

export default Index;
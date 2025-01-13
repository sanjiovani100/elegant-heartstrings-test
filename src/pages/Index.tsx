import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import LingerieShowcase from "@/components/LingerieShowcase";
import Tickets from "@/components/tickets/Tickets";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <LingerieShowcase />
      <Tickets />
    </main>
  );
};

export default Index;
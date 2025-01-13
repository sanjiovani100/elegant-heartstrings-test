import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import LingerieShowcase from "@/components/LingerieShowcase";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <LingerieShowcase />
    </main>
  );
};

export default Index;
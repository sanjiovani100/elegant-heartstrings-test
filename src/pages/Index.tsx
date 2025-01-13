import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default Index;
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import SponsorForm from "@/components/sponsors/SponsorForm";

const SponsorshipApplication = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sponsorship Application
        </h1>
        <div className="max-w-4xl mx-auto">
          <SponsorForm />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SponsorshipApplication;
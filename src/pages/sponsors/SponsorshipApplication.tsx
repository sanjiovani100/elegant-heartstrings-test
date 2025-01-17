import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { SponsorshipForm } from "@/components/sponsors/form/SponsorshipForm";

const SponsorshipApplication = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sponsor-bg-primary">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28"> {/* Added padding-top */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-4xl font-playfair text-sponsor-text-primary text-center mb-6">
            Sponsorship Application
          </h1>
          <p className="text-sponsor-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Join us in creating unforgettable fashion experiences. Complete the form below to begin your sponsorship journey.
          </p>
          <div className="bg-sponsor-bg-primary shadow-sponsor-card rounded-lg p-6">
            <SponsorshipForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorshipApplication;
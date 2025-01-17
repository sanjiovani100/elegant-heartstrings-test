import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { SponsorshipForm } from "@/components/sponsors/form/SponsorshipForm";

const SponsorshipApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-4xl font-playfair text-gray-900 text-center mb-6">
            Sponsorship Application
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join us in creating unforgettable fashion experiences. Complete the form below to begin your sponsorship journey.
          </p>
          <SponsorshipForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorshipApplication;
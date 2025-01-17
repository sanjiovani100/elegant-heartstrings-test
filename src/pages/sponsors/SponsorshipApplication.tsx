import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const SponsorshipApplication = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate("/login");
          return;
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Auth error:", error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-fashionista-red" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sponsorship Application
        </h1>
        <div className="max-w-4xl mx-auto bg-white/5 rounded-lg p-8">
          {/* Form components will be added here */}
          <p className="text-center text-gray-400">
            Application form is being implemented. Please check back soon.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SponsorshipApplication;
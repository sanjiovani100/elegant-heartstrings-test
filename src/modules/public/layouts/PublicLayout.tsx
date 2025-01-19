import React from "react";
import Navbar from "@/modules/public/components/shared/Navbar";
import Footer from "@/modules/public/components/shared/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
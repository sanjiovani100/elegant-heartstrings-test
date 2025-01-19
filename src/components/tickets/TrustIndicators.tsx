import { Shield, CreditCard, Lock, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustIndicators = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected by Stripe's advanced security"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Credit Card, Apple Pay, Google Pay"
    },
    {
      icon: Lock,
      title: "SSL Encrypted",
      description: "Your data is always protected"
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      description: "Receive tickets immediately"
    },
    {
      icon: CheckCircle,
      title: "Money-Back Guarantee",
      description: "Full refund policy available"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-fashionista-red/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Shop with Confidence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center bg-white/5 backdrop-blur border-white/10 hover:border-fashionista-red/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-fashionista-red/10">
                    <Icon className="w-6 h-6 text-fashionista-red" />
                  </div>
                  <h3 className="text-lg font-montserrat text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
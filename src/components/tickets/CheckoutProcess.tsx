import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, CreditCard, User, Calendar } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Select Tickets",
    icon: Calendar,
    description: "Choose your ticket type and quantity"
  },
  {
    id: 2,
    title: "Add Details",
    icon: User,
    description: "Fill in attendee information"
  },
  {
    id: 3,
    title: "Payment",
    icon: CreditCard,
    description: "Complete secure payment"
  }
];

const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-montserrat text-center mb-12">
          Simple Checkout Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => {
            const StepIcon = step.icon;
            const isComplete = currentStep > step.id;
            const isActive = currentStep === step.id;
            
            return (
              <Card 
                key={step.id}
                className={`p-6 text-center transition-all duration-300 ${
                  isActive ? 'border-fashionista-red shadow-lg' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isComplete ? 'bg-green-500' : 
                    isActive ? 'bg-fashionista-red' : 'bg-gray-200'
                  }`}>
                    {isComplete ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <StepIcon className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-gray-500'
                      }`} />
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-montserrat mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {isActive && (
                  <Button 
                    onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))}
                    className="w-full bg-fashionista-red hover:bg-fashionista-red/90"
                  >
                    {step.id === steps.length ? 'Complete Order' : 'Continue'}
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckoutProcess;
import { useInView } from "react-intersection-observer";
import { FileText, Image, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessSteps = () => {
  const steps: Step[] = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Fill out the application",
      description: "Complete our detailed model application form with your information and experience."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Submit photos or portfolio",
      description: "Share your best professional photos or portfolio showcasing your modeling experience."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Attend the selection process",
      description: "Meet with our team for a professional evaluation and potential placement in our upcoming events."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-12 md:gap-16">
        {steps.map((step, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 opacity-0 translate-y-8",
                inView && "animate-fade-up"
              )}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-fashionista-red/10 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-playfair mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 font-inter">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 h-24 w-px bg-fashionista-red/20 transform translate-y-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;
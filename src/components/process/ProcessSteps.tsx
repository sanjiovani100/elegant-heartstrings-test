import { useInView } from "react-intersection-observer";
import { FileText, Image, UserCheck, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}

interface ProcessStepsProps {
  title?: string;
  steps?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const ProcessSteps = ({ title, steps: customSteps }: ProcessStepsProps) => {
  const defaultSteps: Step[] = [
    {
      icon: <FileText className="w-12 h-12 text-fashionista-pink" />,
      title: "Fill out the application",
      description: "Complete our detailed model application form with your information and experience.",
      number: "01"
    },
    {
      icon: <Image className="w-12 h-12 text-fashionista-pink" />,
      title: "Submit photos or portfolio",
      description: "Share your best professional photos or portfolio showcasing your modeling experience.",
      number: "02"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-fashionista-pink" />,
      title: "Attend the selection process",
      description: "Meet with our team for a professional evaluation and potential placement in our upcoming events.",
      number: "03"
    }
  ];

  const stepsToRender = customSteps ? customSteps.map((step, index) => ({
    ...step,
    number: `0${index + 1}`,
    icon: <FileText className="w-12 h-12 text-fashionista-pink" /> // Default icon if not specified
  })) : defaultSteps;

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-fashionista-red/20 hidden md:block" />
      
      {title && (
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-16">
          {title}
        </h2>
      )}

      <div className="space-y-32">
        {stepsToRender.map((step, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={cn(
                "grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-0 translate-y-8 relative",
                inView && "animate-fade-up",
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              )}
            >
              {/* Step Number */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-fashionista-red flex items-center justify-center text-white font-montserrat text-xl">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                "flex flex-col items-center md:items-end text-center md:text-right",
                index % 2 !== 0 && "md:order-2 md:items-start md:text-left"
              )}>
                <h3 className="text-3xl font-playfair mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 font-inter max-w-md">
                  {step.description}
                </p>
              </div>

              {/* Icon/Image Container */}
              <div className={cn(
                "flex justify-center",
                index % 2 !== 0 && "md:order-1"
              )}>
                <div className="w-48 h-48 rounded-full bg-fashionista-red/10 flex items-center justify-center shadow-glow">
                  {step.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;
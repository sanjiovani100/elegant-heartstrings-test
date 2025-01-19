import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the eligibility requirements?",
    answer: "We welcome models of all experience levels, ages 18 and above. You should be comfortable walking in heels and have a professional attitude.",
  },
  {
    question: "Do I need professional photos for my portfolio?",
    answer: "While professional photos are preferred, we also accept high-quality digital photos that clearly show your features and body proportions.",
  },
  {
    question: "What is the time commitment?",
    answer: "Selected models must be available for fittings, rehearsals, and the main event. Typically, this involves 3-4 days of commitment.",
  },
  {
    question: "Is there compensation for participating?",
    answer: "Yes, selected models receive compensation, professional photos, and videos from the event for their portfolio.",
  },
];

const ModelFAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ModelFAQ;
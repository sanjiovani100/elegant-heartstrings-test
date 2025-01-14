import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the General Admission ticket?",
    answer: "General Admission includes access to all fashion shows, standard seating, event program, and access to general networking areas."
  },
  {
    question: "What additional benefits come with VIP tickets?",
    answer: "VIP tickets include premium front-row seating, complimentary drinks, VIP lounge access, meet & greet with designers, exclusive gift bag, and priority check-in."
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer: "Tickets are non-refundable but can be transferred to another person up to 48 hours before the event. Please contact our support team for assistance."
  },
  {
    question: "Is there a dress code?",
    answer: "Yes, we encourage elegant evening wear. The dress code is formal/cocktail attire."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-montserrat text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-montserrat py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
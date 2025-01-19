import { Card } from "@/components/ui/card";
import { Check, Info } from "lucide-react";

const requirements = [
  {
    category: "Physical Requirements",
    items: [
      "Height: Minimum 5'9\" (175cm) for women, 6'0\" (183cm) for men",
      "Age: 18-30 years old",
      "Well-proportioned figure",
      "Good physical fitness level",
    ],
  },
  {
    category: "Professional Requirements",
    items: [
      "Professional portfolio (digital or physical)",
      "Previous runway or photoshoot experience preferred",
      "Ability to walk confidently in high heels",
      "Professional attitude and punctuality",
    ],
  },
  {
    category: "Documentation",
    items: [
      "Valid government-issued ID",
      "Professional headshots and full-body photos",
      "Signed model release form",
      "Completed application form",
    ],
  },
];

const ModelRequirements = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-montserrat text-center mb-8">
          Model Requirements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-fashionista-red" />
                <h3 className="font-montserrat text-lg">{category.category}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fashionista-red flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelRequirements;
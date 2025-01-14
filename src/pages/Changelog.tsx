import { Check, X, Plus, RefreshCw, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const changelogEntries = [
  {
    version: "v1.2.0",
    date: "March 15, 2024",
    changes: [
      {
        type: "feature",
        description: "Added new model registration portal",
      },
      {
        type: "improvement",
        description: "Enhanced ticket management system",
      },
      {
        type: "fix",
        description: "Resolved login issues on mobile devices",
      },
    ],
  },
  {
    version: "v1.1.0",
    date: "March 1, 2024",
    changes: [
      {
        type: "feature",
        description: "Implemented designer showcase platform",
      },
      {
        type: "removed",
        description: "Deprecated legacy notification system",
      },
    ],
  },
];

const ChangeTypeBadge = ({ type }: { type: string }) => {
  const getTypeDetails = (type: string) => {
    switch (type) {
      case "feature":
        return {
          color: "bg-green-500 hover:bg-green-600",
          icon: <Plus className="w-4 h-4 mr-1" />,
          label: "New Feature",
        };
      case "improvement":
        return {
          color: "bg-blue-500 hover:bg-blue-600",
          icon: <RefreshCw className="w-4 h-4 mr-1" />,
          label: "Improvement",
        };
      case "fix":
        return {
          color: "bg-yellow-500 hover:bg-yellow-600",
          icon: <Check className="w-4 h-4 mr-1" />,
          label: "Fix",
        };
      case "removed":
        return {
          color: "bg-red-500 hover:bg-red-600",
          icon: <X className="w-4 h-4 mr-1" />,
          label: "Removed",
        };
      default:
        return {
          color: "bg-gray-500 hover:bg-gray-600",
          icon: null,
          label: type,
        };
    }
  };

  const { color, icon, label } = getTypeDetails(type);

  return (
    <Badge className={`${color} text-white`}>
      {icon}
      {label}
    </Badge>
  );
};

const Changelog = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-8">
            Changelog
          </h1>
          
          <div className="space-y-8">
            {changelogEntries.map((entry, index) => (
              <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-montserrat text-white">
                    {entry.version}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {entry.date}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <ul className="space-y-4">
                  {entry.changes.map((change, changeIndex) => (
                    <li
                      key={changeIndex}
                      className="flex items-start gap-4"
                    >
                      <ChangeTypeBadge type={change.type} />
                      <span className="text-gray-200">
                        {change.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Changelog;
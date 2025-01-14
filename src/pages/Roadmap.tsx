import { Milestone, Check, Clock, List, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const roadmapItems = [
  {
    phase: "Phase 1: Foundation",
    status: "completed",
    timeframe: "Q1 2024",
    items: [
      "Basic event management system",
      "User authentication",
      "Model registration portal",
    ],
  },
  {
    phase: "Phase 2: Enhanced Features",
    status: "in-progress",
    timeframe: "Q2 2024",
    items: [
      "Advanced ticket management",
      "Designer showcase platform",
      "Integrated payment system",
    ],
  },
  {
    phase: "Phase 3: Growth & Scale",
    status: "planned",
    timeframe: "Q3 2024",
    items: [
      "Multi-event support",
      "Analytics dashboard",
      "Mobile application",
    ],
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 hover:bg-green-600";
      case "in-progress":
        return "bg-blue-500 hover:bg-blue-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Badge className={`${getStatusColor(status)} text-white`}>
      {status === "completed" && <Check className="w-4 h-4 mr-1" />}
      {status === "in-progress" && <Clock className="w-4 h-4 mr-1" />}
      {status === "planned" && <List className="w-4 h-4 mr-1" />}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-8">
            Project Roadmap
          </h1>
          
          <div className="space-y-8">
            {roadmapItems.map((phase, index) => (
              <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Milestone className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-montserrat text-white">
                      {phase.phase}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{phase.timeframe}</span>
                    <StatusBadge status={phase.status} />
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-gray-200"
                    >
                      <ArrowUp className="w-4 h-4 text-primary" />
                      {item}
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

export default Roadmap;
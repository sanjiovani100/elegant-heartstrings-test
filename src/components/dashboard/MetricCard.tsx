import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  icon: React.ReactNode;
  positive?: boolean;
  className?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeText,
  icon, 
  positive = true,
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn("bg-white", className)}>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-gray-600">{title}</p>
          {icon}
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">{value}</p>
          <div className="flex items-center space-x-2">
            <span className={cn(
              "text-xs font-medium px-1.5 py-0.5 rounded",
              positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
            )}>
              {change}
            </span>
            <span className="text-xs text-gray-500">{changeText}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: {
    value: string | number;
    type: "increase" | "decrease";
  };
  icon: React.ReactNode;
  daily?: {
    value: number;
    label: string;
  };
}

export function MetricCard({ title, value, change, icon, daily }: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span
              className={cn(
                "text-sm font-medium",
                change.type === "increase" ? "text-green-600" : "text-red-600"
              )}
            >
              {change.type === "increase" ? "+" : "-"}{change.value}%
            </span>
            {daily && (
              <span className="text-sm text-muted-foreground">
                {daily.value} {daily.label}
              </span>
            )}
          </div>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </Card>
  );
}
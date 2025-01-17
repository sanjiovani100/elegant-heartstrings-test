import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { SponsorshipFormData } from "../../types";

const SPONSORSHIP_GOALS = [
  { id: "brand_awareness", label: "Brand Awareness" },
  { id: "lead_generation", label: "Lead Generation" },
  { id: "product_launch", label: "Product Launch" },
  { id: "market_research", label: "Market Research" },
  { id: "networking", label: "Industry Networking" },
  { id: "sales", label: "Direct Sales" },
];

interface SponsorshipGoalsProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const SponsorshipGoals = ({ form }: SponsorshipGoalsProps) => {
  return (
    <FormField
      control={form.control}
      name="preferences.goals"
      render={() => (
        <FormItem>
          <FormLabel>Sponsorship Goals</FormLabel>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {SPONSORSHIP_GOALS.map((goal) => (
              <FormField
                key={goal.id}
                control={form.control}
                name="preferences.goals"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(goal.id)}
                        onCheckedChange={(checked) => {
                          const current = field.value || [];
                          const updated = checked
                            ? [...current, goal.id]
                            : current.filter((value) => value !== goal.id);
                          field.onChange(updated);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {goal.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
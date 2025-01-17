import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SponsorshipFormData } from "../../types";

interface TargetAudienceProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const TargetAudience = ({ form }: TargetAudienceProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Target Audience</h3>
      
      <FormField
        control={form.control}
        name="preferences.targetAudience.ageRange.min"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum Age</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                max={100}
                placeholder="Enter minimum age"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferences.targetAudience.ageRange.max"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maximum Age</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                max={100}
                placeholder="Enter maximum age"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferences.targetAudience.location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g., North America, Europe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferences.targetAudience.profession"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Profession</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Fashion Professionals, Designers" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
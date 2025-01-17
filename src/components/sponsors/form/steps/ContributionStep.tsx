import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SponsorshipFormData } from "../types";

interface ContributionStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const ContributionStep = ({ form }: ContributionStepProps) => {
  const contributionType = form.watch("contribution.type");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contribution Details</h2>
      
      <FormField
        control={form.control}
        name="contribution.type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Contribution</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="financial" id="financial" />
                  <Label htmlFor="financial">Financial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="in_kind" id="in_kind" />
                  <Label htmlFor="in_kind">In-Kind</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="combination" id="combination" />
                  <Label htmlFor="combination">Combination</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {(contributionType === "in_kind" || contributionType === "combination") && (
        <FormField
          control={form.control}
          name="contribution.inKindDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>In-Kind Contribution Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe the in-kind contribution you would like to make"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="contribution.amount.min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Contribution Amount ($)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter minimum amount"
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
          name="contribution.amount.max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Contribution Amount ($)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter maximum amount"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
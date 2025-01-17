import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SponsorshipFormData } from "../../types";

interface PreviousSponsorshipProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const PreviousSponsorship = ({ form }: PreviousSponsorshipProps) => {
  const hasPreviousSponsorship = form.watch("additionalInfo.hasPreviousSponsorship");

  return (
    <>
      <FormField
        control={form.control}
        name="additionalInfo.hasPreviousSponsorship"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel>Previous Sponsorship Experience</FormLabel>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {hasPreviousSponsorship && (
        <FormField
          control={form.control}
          name="additionalInfo.previousSponsorshipDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Sponsorship Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your previous sponsorship experiences"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};
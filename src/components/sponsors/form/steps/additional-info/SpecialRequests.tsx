import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { SponsorshipFormData } from "../../types";

interface SpecialRequestsProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const SpecialRequests = ({ form }: SpecialRequestsProps) => {
  return (
    <FormField
      control={form.control}
      name="additionalInfo.specialRequests"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Special Requests</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Any additional requests or notes"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
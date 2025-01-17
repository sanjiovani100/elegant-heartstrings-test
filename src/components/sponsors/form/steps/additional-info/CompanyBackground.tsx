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

interface CompanyBackgroundProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const CompanyBackground = ({ form }: CompanyBackgroundProps) => {
  return (
    <FormField
      control={form.control}
      name="additionalInfo.companyBackground"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Background</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us about your company's history and values"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
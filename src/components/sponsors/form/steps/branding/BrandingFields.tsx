import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../../types";

interface BrandingFieldsProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingFields = ({ form }: BrandingFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="branding.brandingRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Custom Branding Requests</FormLabel>
            <FormDescription>
              Specify any special requirements for your brand's representation
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Enter any specific branding guidelines or requests"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="branding.companyTagline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Tagline</FormLabel>
            <FormDescription>
              A short, memorable phrase that represents your brand
            </FormDescription>
            <FormControl>
              <Input placeholder="Enter your company's tagline" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
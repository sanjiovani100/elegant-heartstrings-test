import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SponsorshipFormData } from "../sponsorshipFormSchema";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Branding and Deliverables</h2>

      <FormField
        control={form.control}
        name="branding.logo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Logo</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="branding.promotionalMaterials"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Promotional Materials</FormLabel>
            <FormControl>
              <Input
                type="file"
                multiple
                accept="image/*,video/*,.pdf"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  field.onChange(files);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="branding.customBrandingRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Custom Branding Requests</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe any specific branding requirements or requests"
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
            <FormControl>
              <Input
                placeholder="Enter your company's tagline or key message"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
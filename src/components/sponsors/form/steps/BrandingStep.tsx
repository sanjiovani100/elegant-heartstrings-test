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
import { SponsorshipFormData } from "../types";
import { FileUpload } from "../FileUpload";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Branding and Deliverables</h2>
      <p className="text-muted-foreground">
        Upload your brand assets and specify your branding requirements.
      </p>

      <FormField
        control={form.control}
        name="branding.logo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Logo</FormLabel>
            <FormDescription>
              Upload a high-resolution logo (PNG or SVG preferred)
            </FormDescription>
            <FormControl>
              <FileUpload
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg', '.svg']
                }}
                maxSize={5 * 1024 * 1024} // 5MB
                value={field.value ? [field.value] : []}
                onChange={(files) => field.onChange(files[0])}
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
            <FormDescription>
              Upload any additional branding materials (images, documents, videos)
            </FormDescription>
            <FormControl>
              <FileUpload
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg'],
                  'application/pdf': ['.pdf'],
                  'video/*': ['.mp4', '.mov']
                }}
                maxFiles={5}
                maxSize={20 * 1024 * 1024} // 20MB
                value={field.value || []}
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

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
    </div>
  );
};
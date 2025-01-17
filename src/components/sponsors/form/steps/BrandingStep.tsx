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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  ValidationRules,
  validationRulesByType,
  SponsorshipType,
  UploadProgress
} from "../types/fileUpload";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
  const { toast } = useToast();
  const sponsorshipType = form.watch("preferences.type") as SponsorshipType;
  const validationRules = validationRulesByType[sponsorshipType] || validationRulesByType.physical;

  const handleFileUpload = async (files: File[], field: "logo" | "promotionalMaterials") => {
    try {
      const rules = validationRules[field];
      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${field}/${fileName}`;

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => ({
          ...prev,
          [field]: Math.min((prev[field] || 0) + 10, 90)
        }));
      }, 100);

      const { data, error: uploadError } = await supabase.storage
        .from('sponsorship-assets')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      clearInterval(progressInterval);
      setUploadProgress(prev => ({
        ...prev,
        [field]: 100
      }));

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('sponsorship-assets')
        .getPublicUrl(filePath);

      // Update form with the file URL
      if (field === "logo") {
        form.setValue("branding.logo", publicUrl);
      } else {
        const currentUrls = form.getValues("branding.promotionalMaterials") || [];
        form.setValue("branding.promotionalMaterials", [...currentUrls, publicUrl]);
      }

      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded.`,
      });

      // Reset progress after a short delay
      setTimeout(() => {
        setUploadProgress(prev => ({
          ...prev,
          [field]: 0
        }));
      }, 1000);

    } catch (error) {
      console.error("Upload error:", error);
      setUploadProgress(prev => ({
        ...prev,
        [field]: 0
      }));
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file.",
        variant: "destructive",
      });
    }
  };

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
              {sponsorshipType === "digital" 
                ? "Upload a high-resolution vector logo (SVG format required for digital sponsorships)"
                : "Upload a high-resolution logo (PNG or SVG preferred)"}
            </FormDescription>
            <FormControl>
              <FileUpload
                accept={
                  sponsorshipType === "digital"
                    ? { 'image/svg+xml': ['.svg'] }
                    : { 'image/*': ['.png', '.jpg', '.jpeg', '.svg'] }
                }
                maxSize={5 * 1024 * 1024} // 5MB
                value={field.value ? [new File([], field.value)] : []}
                onChange={(files) => handleFileUpload(files, "logo")}
                progress={uploadProgress["logo"]}
                required
                validateDimensions={sponsorshipType !== "digital"}
                minWidth={1000}
                minHeight={1000}
                helperText={`Maximum file size: 5MB. ${
                  sponsorshipType === "digital"
                    ? "SVG format required."
                    : "Supported formats: PNG, JPG, SVG. Minimum dimensions: 1000x1000px"
                }`}
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
                  'application/pdf': ['.pdf']
                }}
                maxFiles={5}
                maxSize={10 * 1024 * 1024} // 10MB
                value={field.value ? field.value.map(url => new File([], url)) : []}
                onChange={(files) => handleFileUpload(files, "promotionalMaterials")}
                progress={uploadProgress["promotionalMaterials"]}
                helperText="Maximum file size: 10MB per file. Up to 5 files. Supported formats: PNG, JPG, PDF"
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

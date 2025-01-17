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
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const handleFileUpload = async (files: File[], field: "logo" | "promotionalMaterials") => {
    try {
      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${field}/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('sponsorship-assets')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          onUploadProgress: (progress) => {
            const percent = (progress.loaded / progress.total) * 100;
            setUploadProgress(prev => ({
              ...prev,
              [field]: percent
            }));
          },
        });

      if (uploadError) throw uploadError;

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
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file.",
        variant: "destructive",
      });
    } finally {
      setUploadProgress(prev => ({
        ...prev,
        [field]: 0
      }));
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
              Upload a high-resolution logo (PNG or SVG preferred)
            </FormDescription>
            <FormControl>
              <FileUpload
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg', '.svg']
                }}
                maxSize={5 * 1024 * 1024} // 5MB
                value={field.value ? [new File([], field.value)] : []}
                onChange={(files) => handleFileUpload(files, "logo")}
                progress={uploadProgress["logo"]}
                helperText="Maximum file size: 5MB. Supported formats: PNG, JPG, SVG"
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
                value={field.value ? field.value.map(url => new File([], url)) : []}
                onChange={(files) => handleFileUpload(files, "promotionalMaterials")}
                progress={uploadProgress["promotionalMaterials"]}
                helperText="Maximum file size: 20MB per file. Up to 5 files."
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
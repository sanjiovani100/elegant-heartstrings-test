import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SponsorshipType } from "../types/formTypes";
import { LogoUpload } from "./branding/LogoUpload";
import { PromotionalMaterials } from "./branding/PromotionalMaterials";
import { BrandingFields } from "./branding/BrandingFields";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const { toast } = useToast();
  
  const sponsorshipType = form.watch("preferences.type") as SponsorshipType || "physical";

  const handleFileUpload = async (files: File[], field: "logo" | "promotionalMaterials") => {
    try {
      const file = files[0];
      
      if (!file) {
        throw new Error("No file selected");
      }

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

      <LogoUpload
        form={form}
        sponsorshipType={sponsorshipType}
        onFileUpload={handleFileUpload}
        uploadProgress={uploadProgress}
      />

      <PromotionalMaterials
        form={form}
        onFileUpload={handleFileUpload}
        uploadProgress={uploadProgress}
      />

      <BrandingFields form={form} />
    </div>
  );
};

export default BrandingStep;
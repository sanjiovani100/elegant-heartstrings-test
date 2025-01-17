import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { supabase } from "@/integrations/supabase/client";
import { FileUploadHandlers } from "../types/fileUpload";
import { toast } from "@/hooks/use-toast";

export const useFileUpload = (
  form: UseFormReturn<SponsorshipFormData>,
  setUploadProgress: React.Dispatch<React.SetStateAction<Record<string, number>>>
): FileUploadHandlers => {
  const handleFileUpload = async (files: File[], field: "logo" | "promotionalMaterials") => {
    try {
      const file = files[0];
      
      if (!file) {
        throw new Error("No file selected");
      }

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => ({
          ...prev,
          [field]: Math.min((prev[field] || 0) + 10, 90)
        }));
      }, 100);

      const fileExt = file.name.split('.').pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;

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
        title: "Success",
        description: `${file.name} has been uploaded successfully.`
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
        title: "Error",
        description: "There was an error uploading your file.",
        variant: "destructive"
      });
    }
  };

  return { handleFileUpload };
};
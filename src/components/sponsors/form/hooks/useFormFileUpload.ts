import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";

export const useFormFileUpload = (form: UseFormReturn<SponsorshipFormData>) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = async (file: File, field: keyof SponsorshipFormData) => {
    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);

      form.setValue(field, file as any);
      
      return true;
    } catch (error) {
      console.error("File upload error:", error);
      return false;
    }
  };

  return { uploadProgress, handleFileUpload };
};
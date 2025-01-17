import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";

export const useFormFileUpload = (form: UseFormReturn<SponsorshipFormData>) => {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const handleFileUpload = async (files: File[], field: keyof SponsorshipFormData) => {
    try {
      // Initialize progress for each file
      const initialProgress = files.reduce((acc, file) => ({
        ...acc,
        [file.name]: 0
      }), {});
      setUploadProgress(initialProgress);

      // Simulate upload progress (in a real app, this would come from the actual upload)
      files.forEach(file => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(prev => ({
            ...prev,
            [file.name]: Math.min(progress, 100)
          }));
          if (progress >= 100) clearInterval(interval);
        }, 100);
      });

      form.setValue(field, files as any);
      return true;
    } catch (error) {
      console.error("File upload error:", error);
      return false;
    }
  };

  return { uploadProgress, handleFileUpload };
};
import { useState, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { SponsorshipFormData } from "../types";

export const useFormAutoSave = (form: UseFormReturn<SponsorshipFormData>) => {
  const [autoSaveTimer, setAutoSaveTimer] = useState<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const saveDraft = () => {
      const formData = form.getValues();
      localStorage.setItem("sponsorshipFormDraft", JSON.stringify(formData));
      toast({
        title: "Draft saved",
        description: "Your progress has been automatically saved",
      });
    };

    if (autoSaveTimer) {
      clearInterval(autoSaveTimer);
    }

    const timer = setInterval(saveDraft, 30000);
    setAutoSaveTimer(timer);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [form, toast]);

  const loadDraft = () => {
    const savedDraft = localStorage.getItem("sponsorshipFormDraft");
    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft);
        form.reset(parsedDraft);
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
  };

  return { loadDraft };
};
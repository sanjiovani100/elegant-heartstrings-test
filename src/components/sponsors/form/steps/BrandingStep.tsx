import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData, SponsorshipType } from "../types";
import { LogoUpload } from "./branding/LogoUpload";
import { PromotionalMaterials } from "./branding/PromotionalMaterials";
import { BrandingFields } from "./branding/BrandingFields";
import { useFileUpload } from "../hooks/useFileUpload";

interface BrandingStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const BrandingStep = ({ form }: BrandingStepProps) => {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const { handleFileUpload } = useFileUpload(form, setUploadProgress);
  
  const preferences = form.watch("preferences");
  const sponsorshipType = (preferences?.type || "physical") as SponsorshipType;

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
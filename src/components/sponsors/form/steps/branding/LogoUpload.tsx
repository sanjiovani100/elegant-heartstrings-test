import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { FileUpload } from "../../FileUpload";
import { SponsorshipType } from "../../types/formTypes";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../../types";

interface LogoUploadProps {
  form: UseFormReturn<SponsorshipFormData>;
  sponsorshipType: SponsorshipType;
  onFileUpload: (files: File[], field: "logo" | "promotionalMaterials") => Promise<void>;
  uploadProgress: Record<string, number>;
}

export const LogoUpload = ({ form, sponsorshipType, onFileUpload, uploadProgress }: LogoUploadProps) => {
  return (
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
              maxSize={5 * 1024 * 1024}
              value={field.value ? [new File([], field.value)] : []}
              onChange={(files) => onFileUpload(files, "logo")}
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
  );
};
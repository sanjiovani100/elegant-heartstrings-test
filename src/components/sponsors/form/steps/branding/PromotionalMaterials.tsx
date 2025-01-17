import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { FileUpload } from "../../FileUpload";
import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../../types";

interface PromotionalMaterialsProps {
  form: UseFormReturn<SponsorshipFormData>;
  onFileUpload: (files: File[], field: "logo" | "promotionalMaterials") => Promise<void>;
  uploadProgress: Record<string, number>;
}

export const PromotionalMaterials = ({ form, onFileUpload, uploadProgress }: PromotionalMaterialsProps) => {
  return (
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
              maxSize={10 * 1024 * 1024}
              value={field.value ? field.value.map(url => new File([], url)) : []}
              onChange={(files) => onFileUpload(files, "promotionalMaterials")}
              progress={uploadProgress["promotionalMaterials"]}
              helperText="Maximum file size: 10MB per file. Up to 5 files. Supported formats: PNG, JPG, PDF"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
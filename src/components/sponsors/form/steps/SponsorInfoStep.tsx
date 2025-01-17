import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { CompanyDetails } from "./sponsor-info/CompanyDetails";
import { WebsiteLinks } from "./sponsor-info/WebsiteLinks";
import { ContactInfo } from "./sponsor-info/ContactInfo";

interface SponsorInfoStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const SponsorInfoStep = ({ form }: SponsorInfoStepProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Sponsor Information</h2>
      
      <CompanyDetails form={form} />
      <WebsiteLinks form={form} />
      <ContactInfo form={form} />
    </div>
  );
};
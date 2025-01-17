import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { CompanyBackground } from "./additional-info/CompanyBackground";
import { PreviousSponsorship } from "./additional-info/PreviousSponsorship";
import { EventParticipation } from "./additional-info/EventParticipation";
import { SpecialRequests } from "./additional-info/SpecialRequests";

interface AdditionalInfoStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const AdditionalInfoStep = ({ form }: AdditionalInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Additional Information</h2>
      <CompanyBackground form={form} />
      <PreviousSponsorship form={form} />
      <EventParticipation form={form} />
      <SpecialRequests form={form} />
    </div>
  );
};
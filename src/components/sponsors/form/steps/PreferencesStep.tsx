import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { EventSegments } from "./preferences/EventSegments";
import { SponsorshipGoals } from "./preferences/SponsorshipGoals";
import { TargetAudience } from "./preferences/TargetAudience";

interface PreferencesStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const PreferencesStep = ({ form }: PreferencesStepProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Sponsorship Preferences</h2>
      
      <EventSegments form={form} />
      <SponsorshipGoals form={form} />
      <TargetAudience form={form} />
    </div>
  );
};
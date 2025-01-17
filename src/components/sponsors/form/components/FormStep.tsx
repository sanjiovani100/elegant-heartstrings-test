import { UseFormReturn } from "react-hook-form";
import { SponsorshipFormData } from "../types";
import { SponsorInfoStep } from "../steps/SponsorInfoStep";
import { PreferencesStep } from "../steps/PreferencesStep";
import { BrandingStep } from "../steps/BrandingStep";
import { ContributionStep } from "../steps/ContributionStep";
import { AdditionalInfoStep } from "../steps/AdditionalInfoStep";
import { AgreementStep } from "../steps/AgreementStep";

interface FormStepProps {
  currentStep: number;
  form: UseFormReturn<SponsorshipFormData>;
}

export const FormStep = ({ currentStep, form }: FormStepProps) => {
  switch (currentStep) {
    case 1:
      return <SponsorInfoStep form={form} />;
    case 2:
      return <PreferencesStep form={form} />;
    case 3:
      return <BrandingStep form={form} />;
    case 4:
      return <ContributionStep form={form} />;
    case 5:
      return <AdditionalInfoStep form={form} />;
    case 6:
      return <AgreementStep form={form} />;
    default:
      return null;
  }
};
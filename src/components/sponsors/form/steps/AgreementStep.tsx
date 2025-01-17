import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SponsorshipFormData } from "../sponsorshipFormSchema";

interface AgreementStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const AgreementStep = ({ form }: AgreementStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Agreement and Review</h2>

      <div className="prose prose-sm max-w-none">
        <h3>Terms and Conditions</h3>
        <p>
          By accepting these terms, you agree to the sponsorship conditions,
          including payment terms, cancellation policy, and sponsor
          responsibilities. Please review all information before signing.
        </p>
      </div>

      <FormField
        control={form.control}
        name="agreement.termsAccepted"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I accept the terms and conditions
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="agreement.signature"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Electronic Signature</FormLabel>
            <FormControl>
              <Input
                placeholder="Type your full name as signature"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
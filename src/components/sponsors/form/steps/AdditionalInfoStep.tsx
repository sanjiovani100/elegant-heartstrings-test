import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { SponsorshipFormData } from "../types";

interface AdditionalInfoStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const AdditionalInfoStep = ({ form }: AdditionalInfoStepProps) => {
  const hasPreviousSponsorship = form.watch("additionalInfo.hasPreviousSponsorship");
  const willParticipate = form.watch("additionalInfo.willParticipate");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Additional Information</h2>

      <FormField
        control={form.control}
        name="additionalInfo.companyBackground"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Background</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us about your company's history and values"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="additionalInfo.hasPreviousSponsorship"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel>Previous Sponsorship Experience</FormLabel>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {hasPreviousSponsorship && (
        <FormField
          control={form.control}
          name="additionalInfo.previousSponsorshipDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Sponsorship Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your previous sponsorship experiences"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="additionalInfo.willParticipate"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel>Will you participate in the event?</FormLabel>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {willParticipate && (
        <>
          <FormField
            control={form.control}
            name="additionalInfo.attendeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Attendees</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter number of attendees"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo.vipRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VIP Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Specify any VIP access or special requirements"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}

      <FormField
        control={form.control}
        name="additionalInfo.specialRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Special Requests</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any additional requests or notes"
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
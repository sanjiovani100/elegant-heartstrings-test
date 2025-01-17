import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SponsorshipFormData } from "../../types";

interface EventParticipationProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const EventParticipation = ({ form }: EventParticipationProps) => {
  const willParticipate = form.watch("additionalInfo.willParticipate");

  return (
    <>
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
        <div className="space-y-4">
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
        </div>
      )}
    </>
  );
};
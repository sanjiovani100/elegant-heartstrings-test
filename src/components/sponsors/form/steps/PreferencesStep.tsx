import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SponsorshipFormData } from "../sponsorshipFormSchema";

interface PreferencesStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const PreferencesStep = ({ form }: PreferencesStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sponsorship Preferences</h2>

      <FormField
        control={form.control}
        name="sponsorshipPreferences.level"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sponsorship Level</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select sponsorship level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="platinum">Platinum</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="bronze">Bronze</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorshipPreferences.eventSegments"
        render={() => (
          <FormItem>
            <FormLabel>Event Segments</FormLabel>
            <div className="space-y-2">
              {["runway_show", "vip_lounge", "backstage", "photo_zone", "designer_spotlight"].map(
                (segment) => (
                  <FormField
                    key={segment}
                    control={form.control}
                    name="sponsorshipPreferences.eventSegments"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(segment)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              const updated = checked
                                ? [...current, segment]
                                : current.filter((value) => value !== segment);
                              field.onChange(updated);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {segment.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                )
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorshipPreferences.targetAudience.ageRange"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Age Range</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 25-45" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorshipPreferences.targetAudience.location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g., North America" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorshipPreferences.targetAudience.profession"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Profession</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Fashion Professionals" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
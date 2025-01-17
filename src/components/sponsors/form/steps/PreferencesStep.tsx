import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SponsorshipFormData } from "../types";

interface PreferencesStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

const EVENT_SEGMENTS = [
  { id: "runway", label: "Runway Shows" },
  { id: "vip_lounge", label: "VIP Lounge" },
  { id: "networking", label: "Networking Events" },
  { id: "exhibitions", label: "Brand Exhibitions" },
  { id: "workshops", label: "Industry Workshops" },
  { id: "digital", label: "Digital Content" },
];

const SPONSORSHIP_GOALS = [
  { id: "brand_awareness", label: "Brand Awareness" },
  { id: "lead_generation", label: "Lead Generation" },
  { id: "product_launch", label: "Product Launch" },
  { id: "market_research", label: "Market Research" },
  { id: "networking", label: "Industry Networking" },
  { id: "sales", label: "Direct Sales" },
];

export const PreferencesStep = ({ form }: PreferencesStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sponsorship Preferences</h2>
      <p className="text-muted-foreground">
        Select your preferred event segments and sponsorship goals.
      </p>

      <FormField
        control={form.control}
        name="preferences.eventSegments"
        render={() => (
          <FormItem>
            <FormLabel>Event Segments</FormLabel>
            <FormDescription>
              Select the event segments you're interested in sponsoring
            </FormDescription>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {EVENT_SEGMENTS.map((segment) => (
                <FormField
                  key={segment.id}
                  control={form.control}
                  name="preferences.eventSegments"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(segment.id)}
                          onCheckedChange={(checked) => {
                            const current = field.value || [];
                            const updated = checked
                              ? [...current, segment.id]
                              : current.filter((value) => value !== segment.id);
                            field.onChange(updated);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {segment.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferences.goals"
        render={() => (
          <FormItem>
            <FormLabel>Sponsorship Goals</FormLabel>
            <FormDescription>
              What do you hope to achieve through this sponsorship?
            </FormDescription>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {SPONSORSHIP_GOALS.map((goal) => (
                <FormField
                  key={goal.id}
                  control={form.control}
                  name="preferences.goals"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(goal.id)}
                          onCheckedChange={(checked) => {
                            const current = field.value || [];
                            const updated = checked
                              ? [...current, goal.id]
                              : current.filter((value) => value !== goal.id);
                            field.onChange(updated);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {goal.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Target Audience</h3>
        
        <FormField
          control={form.control}
          name="preferences.targetAudience.ageRange.min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Enter minimum age"
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
          name="preferences.targetAudience.ageRange.max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Enter maximum age"
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
          name="preferences.targetAudience.location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g., North America, Europe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferences.targetAudience.profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Profession</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Fashion Professionals, Designers" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
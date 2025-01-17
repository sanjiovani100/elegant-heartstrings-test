import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { SponsorshipFormData } from "../../types";

const EVENT_SEGMENTS = [
  { id: "runway", label: "Runway Shows" },
  { id: "vip_lounge", label: "VIP Lounge" },
  { id: "networking", label: "Networking Events" },
  { id: "exhibitions", label: "Brand Exhibitions" },
  { id: "workshops", label: "Industry Workshops" },
  { id: "digital", label: "Digital Content" },
];

interface EventSegmentsProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const EventSegments = ({ form }: EventSegmentsProps) => {
  return (
    <FormField
      control={form.control}
      name="preferences.eventSegments"
      render={() => (
        <FormItem>
          <FormLabel>Event Segments</FormLabel>
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
  );
};
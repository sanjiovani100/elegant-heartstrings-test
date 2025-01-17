import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";
import { SponsorshipFormData } from "../../types";

interface WebsiteLinksProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const WebsiteLinks = ({ form }: WebsiteLinksProps) => {
  const addWebsiteLink = () => {
    const currentLinks = form.getValues("sponsorInfo.websiteLinks");
    form.setValue("sponsorInfo.websiteLinks", [
      ...currentLinks,
      { type: "website", url: "" },
    ]);
  };

  const removeWebsiteLink = (index: number) => {
    const currentLinks = form.getValues("sponsorInfo.websiteLinks");
    form.setValue(
      "sponsorInfo.websiteLinks",
      currentLinks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <FormLabel>Website & Social Media Links</FormLabel>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addWebsiteLink}
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Link
        </Button>
      </div>

      {form.watch("sponsorInfo.websiteLinks")?.map((_, index) => (
        <div key={index} className="flex gap-4">
          <FormField
            control={form.control}
            name={`sponsorInfo.websiteLinks.${index}.type`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Link type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`sponsorInfo.websiteLinks.${index}.url`}
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input placeholder="Enter URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {index > 0 && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeWebsiteLink(index)}
            >
              <MinusCircle className="w-4 h-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
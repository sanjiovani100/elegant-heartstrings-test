import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
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
import { SponsorshipFormData } from "../types";
import { PlusCircle, MinusCircle } from "lucide-react";

interface SponsorInfoStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const SponsorInfoStep = ({ form }: SponsorInfoStepProps) => {
  const addWebsiteLink = () => {
    const currentLinks = form.getValues("sponsorInfo.websiteLinks");
    form.setValue("sponsorInfo.websiteLinks", [...currentLinks, { type: "website", url: "", label: "" }]);
  };

  const removeWebsiteLink = (index: number) => {
    const currentLinks = form.getValues("sponsorInfo.websiteLinks");
    form.setValue(
      "sponsorInfo.websiteLinks",
      currentLinks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sponsor Information</h2>
      <p className="text-muted-foreground">
        Please provide your company's basic information and contact details.
      </p>

      <FormField
        control={form.control}
        name="sponsorInfo.companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter company name" {...field} />
            </FormControl>
            <FormDescription>
              The official registered name of your company
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorInfo.industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

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

      <FormField
        control={form.control}
        name="sponsorInfo.contactName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter contact person's name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorInfo.contactEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter contact email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sponsorInfo.contactPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Phone</FormLabel>
            <FormControl>
              <Input placeholder="Enter contact phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
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
import { SponsorshipFormData } from "../sponsorshipFormSchema";
import { PlusCircle, MinusCircle } from "lucide-react";

interface SponsorInfoStepProps {
  form: UseFormReturn<SponsorshipFormData>;
}

export const SponsorInfoStep = ({ form }: SponsorInfoStepProps) => {
  const addWebsiteLink = () => {
    const currentLinks = form.getValues("companyInfo.websiteLinks");
    form.setValue("companyInfo.websiteLinks", [...currentLinks, ""]);
  };

  const removeWebsiteLink = (index: number) => {
    const currentLinks = form.getValues("companyInfo.websiteLinks");
    form.setValue(
      "companyInfo.websiteLinks",
      currentLinks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sponsor Information</h2>

      <FormField
        control={form.control}
        name="companyInfo.companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyInfo.industry"
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
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="food_and_beverage">Food & Beverage</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyInfo.contactName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter contact name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyInfo.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter email address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyInfo.phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <FormLabel>Website/Social Media Links</FormLabel>
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

        {form.watch("companyInfo.websiteLinks").map((_, index) => (
          <div key={index} className="flex gap-2">
            <FormField
              control={form.control}
              name={`companyInfo.websiteLinks.${index}`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Enter website URL" {...field} />
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
    </div>
  );
};
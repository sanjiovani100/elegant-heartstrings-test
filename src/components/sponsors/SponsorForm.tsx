import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SponsorFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  sponsorshipLevel: string;
  message: string;
}

const SponsorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SponsorFormData>();

  const onSubmit = async (data: SponsorFormData) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);
    // Add form submission logic here
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-fashionista-red/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-4">
            Become a Sponsor
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Fill out the form below and our team will get back to you with more information.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Company Name"
                {...register("companyName", { required: true })}
                className="bg-white/10 border-gray-700"
              />
              <Input
                placeholder="Contact Name"
                {...register("contactName", { required: true })}
                className="bg-white/10 border-gray-700"
              />
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="bg-white/10 border-gray-700"
              />
              <Input
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="bg-white/10 border-gray-700"
              />
              
              <Select>
                <SelectTrigger className="bg-white/10 border-gray-700">
                  <SelectValue placeholder="Select Sponsorship Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">Gold Sponsor</SelectItem>
                  <SelectItem value="silver">Silver Sponsor</SelectItem>
                  <SelectItem value="bronze">Bronze Sponsor</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Additional Message"
                {...register("message")}
                className="bg-white/10 border-gray-700 min-h-[100px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-fashionista-red hover:bg-fashionista-red/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Sponsorship Application"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorForm;
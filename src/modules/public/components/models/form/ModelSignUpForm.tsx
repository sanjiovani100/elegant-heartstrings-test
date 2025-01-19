import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import ModelFormFields from "./ModelFormFields";
import type { ModelFormData } from "@/types/supabase/database/tables/profile.types";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  experience: z.string().min(10, {
    message: "Please provide some details about your modeling experience.",
  }),
  portfolioLink: z.string().url({
    message: "Please enter a valid portfolio URL.",
  }).optional().or(z.literal('')),
});

const ModelSignUpForm = () => {
  const { toast } = useToast();
  const form = useForm<ModelFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      portfolioLink: "",
    },
  });

  async function onSubmit(values: ModelFormData) {
    try {
      // Here you would typically make an API call to submit the form
      console.log(values);
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="model-signup">
        <ModelFormFields form={form} />
        <Button 
          type="submit" 
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white transition-all duration-300"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
};

export default ModelSignUpForm;
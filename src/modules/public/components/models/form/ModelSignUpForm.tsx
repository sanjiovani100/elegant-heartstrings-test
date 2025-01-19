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
  }).optional(),
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

  function onSubmit(values: ModelFormData) {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ModelFormFields form={form} />
        <Button 
          type="submit" 
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white"
        >
          Submit Application
        </Button>
      </form>
    </Form>
  );
};

export default ModelSignUpForm;
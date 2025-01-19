import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import ModelFormFields from "./ModelFormFields";
import type { ModelFormData } from "@/types/supabase/database/tables/profile.types";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address. This will be used for communication.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number including area code.",
  }).regex(/^[0-9+\-\s()]*$/, {
    message: "Phone number can only contain numbers, spaces, and basic symbols.",
  }),
  experience: z.string().min(50, {
    message: "Please provide detailed information about your modeling experience (minimum 50 characters).",
  }),
  portfolioLink: z.string().url({
    message: "Please enter a valid portfolio URL (e.g., Instagram, LinkedIn, or personal website).",
  }).optional().or(z.literal('')),
});

const ModelSignUpForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      setIsSubmitting(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to submit your application.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('model_applications')
        .insert([
          {
            user_id: user.id,
            full_name: values.fullName,
            email: values.email,
            phone: values.phone,
            experience: values.experience,
            portfolio_link: values.portfolioLink || null,
          }
        ]);

      if (error) throw error;
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error('Application submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="model-signup">
        <ModelFormFields form={form} />
        <Button 
          type="submit" 
          className="w-full bg-fashionista-red hover:bg-fashionista-red/90 text-white transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ModelSignUpForm;
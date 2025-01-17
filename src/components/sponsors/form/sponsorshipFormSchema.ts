import * as z from "zod";

export const sponsorshipFormSchema = z.object({
  // Step 1: Sponsor Information
  companyInfo: z.object({
    companyName: z.string().min(2, "Company name must be at least 2 characters"),
    industry: z.enum([
      "fashion",
      "technology",
      "beauty",
      "lifestyle",
      "food_and_beverage",
      "media",
      "retail",
      "luxury",
      "other"
    ]),
    contactName: z.string().min(2, "Contact name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    websiteLinks: z.array(z.string().url("Invalid URL")).min(1, "At least one website link is required"),
  }),

  // Step 2: Sponsorship Preferences
  sponsorshipPreferences: z.object({
    level: z.enum(["platinum", "gold", "silver", "bronze", "custom"]),
    eventSegments: z.array(z.string()).min(1, "Select at least one event segment"),
    goals: z.array(z.string()).min(1, "Select at least one goal"),
    otherGoal: z.string().optional(),
    targetAudience: z.object({
      ageRange: z.string(),
      location: z.string(),
      profession: z.string(),
      interests: z.array(z.string()),
    }),
  }),

  // Step 3: Branding
  branding: z.object({
    logo: z.any(), // Will be handled by file upload
    promotionalMaterials: z.array(z.any()), // Will be handled by file upload
    customBrandingRequests: z.string(),
    companyTagline: z.string(),
  }),

  // Step 4: Contribution
  contribution: z.object({
    type: z.enum(["financial", "in_kind", "combination"]),
    inKindDetails: z.string().optional(),
    contributionRange: z.object({
      min: z.number(),
      max: z.number(),
    }),
  }),

  // Step 5: Additional Info
  additionalInfo: z.object({
    companyBackground: z.string(),
    hasPreviousSponsorship: z.boolean(),
    previousSponsorshipDetails: z.string().optional(),
    willParticipate: z.boolean(),
    participationDetails: z.object({
      attendeeCount: z.number().optional(),
      vipRequirements: z.string().optional(),
    }),
    specialRequests: z.string(),
  }),

  // Step 6: Agreement
  agreement: z.object({
    termsAccepted: z.boolean(),
    signature: z.string(),
  }),
});

export type SponsorshipFormData = z.infer<typeof sponsorshipFormSchema>;
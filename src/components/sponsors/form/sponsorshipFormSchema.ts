import * as z from "zod";

const websiteLinkSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  type: z.enum(["website", "linkedin", "twitter", "instagram", "other"]),
  label: z.string().optional(),
});

const targetAudienceSchema = z.object({
  ageRange: z.object({
    min: z.number().min(0).max(100),
    max: z.number().min(0).max(100),
  }),
  location: z.string().min(2, "Location must be at least 2 characters"),
  profession: z.string().min(2, "Profession must be at least 2 characters"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

export const sponsorshipFormSchema = z.object({
  // Step 1: Sponsor Information
  sponsorInfo: z.object({
    companyName: z.string().min(2, "Company name must be at least 2 characters"),
    industry: z.enum([
      "fashion",
      "beauty",
      "technology",
      "lifestyle",
      "media",
      "retail",
      "other"
    ]),
    websiteLinks: z.array(websiteLinkSchema).min(1, "At least one website link is required"),
    contactName: z.string().min(2, "Contact name is required"),
    contactEmail: z.string().email("Invalid email address"),
    contactPhone: z.string().min(10, "Phone number is required"),
  }),

  // Step 2: Sponsorship Preferences
  preferences: z.object({
    eventSegments: z.array(z.string()).min(1, "Select at least one event segment"),
    goals: z.array(z.string()).min(1, "Select at least one goal"),
    otherGoal: z.string().optional(),
    targetAudience: targetAudienceSchema,
  }),

  // Step 3: Branding
  branding: z.object({
    logo: z.any(), // Will be handled by file upload
    promotionalMaterials: z.array(z.any()), // Will be handled by file upload
    brandingRequests: z.string(),
    companyTagline: z.string(),
  }),

  // Step 4: Contribution
  contribution: z.object({
    type: z.enum(["financial", "in_kind", "combination"]),
    inKindDetails: z.string().optional(),
    amount: z.object({
      min: z.number().min(0),
      max: z.number().min(0),
    }),
    currency: z.string().default("USD"),
  }),

  // Step 5: Additional Info
  additionalInfo: z.object({
    companyBackground: z.string(),
    hasPreviousSponsorship: z.boolean(),
    previousSponsorshipDetails: z.string().optional(),
    willParticipate: z.boolean(),
    attendeeCount: z.number().optional(),
    vipRequirements: z.string().optional(),
    specialRequests: z.string(),
  }),

  // Step 6: Agreement
  agreement: z.object({
    termsAccepted: z.boolean(),
    signature: z.string(),
  }),
});

export type SponsorshipFormData = z.infer<typeof sponsorshipFormSchema>;
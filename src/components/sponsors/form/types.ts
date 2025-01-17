import { z } from "zod";

export const websiteLinkSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  type: z.enum(["website", "linkedin", "twitter", "instagram", "other"]),
  label: z.string().optional(),
});

export const targetAudienceSchema = z.object({
  ageRange: z.object({
    min: z.number().min(0).max(100),
    max: z.number().min(0).max(100),
  }),
  location: z.string().min(2, "Location must be at least 2 characters"),
  profession: z.string().min(2, "Profession must be at least 2 characters"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

export const sponsorInfoSchema = z.object({
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
});

export const sponsorshipPreferencesSchema = z.object({
  eventSegments: z.array(z.string()).min(1, "Select at least one event segment"),
  goals: z.array(z.string()).min(1, "Select at least one goal"),
  otherGoal: z.string().optional(),
  targetAudience: targetAudienceSchema,
});

export const brandingSchema = z.object({
  logo: z.any(),
  promotionalMaterials: z.array(z.any()),
  brandingRequests: z.string(),
  companyTagline: z.string(),
});

export const contributionSchema = z.object({
  type: z.enum(["financial", "in_kind", "combination"]),
  inKindDetails: z.string().optional(),
  amount: z.object({
    min: z.number().min(0),
    max: z.number().min(0),
  }),
  currency: z.string().default("USD"),
});

export const additionalInfoSchema = z.object({
  companyBackground: z.string(),
  hasPreviousSponsorship: z.boolean(),
  previousSponsorshipDetails: z.string().optional(),
  willParticipate: z.boolean(),
  attendeeCount: z.number().optional(),
  vipRequirements: z.string().optional(),
  specialRequests: z.string(),
});

export const agreementSchema = z.object({
  termsAccepted: z.boolean(),
  signature: z.string(),
});

export const sponsorshipFormSchema = z.object({
  sponsorInfo: sponsorInfoSchema,
  preferences: sponsorshipPreferencesSchema,
  branding: brandingSchema,
  contribution: contributionSchema,
  additionalInfo: additionalInfoSchema,
  agreement: agreementSchema,
});

export type SponsorshipFormData = z.infer<typeof sponsorshipFormSchema>;
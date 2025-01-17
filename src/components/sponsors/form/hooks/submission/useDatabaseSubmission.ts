import { supabase } from "@/integrations/supabase/client";
import { SponsorshipFormData } from "../../types";

export const saveApplicationToDatabase = async (
  data: SponsorshipFormData,
  userId: string,
  logoUrl: string | null,
  promoUrls: string[]
) => {
  const { error: dbError } = await supabase
    .from("sponsorship_applications")
    .insert({
      sponsor_id: userId,
      status: "submitted",
      contact_name: data.sponsorInfo.contactName,
      contact_email: data.sponsorInfo.contactEmail,
      contact_phone: data.sponsorInfo.contactPhone,
      website_links: data.sponsorInfo.websiteLinks,
      event_segments: data.preferences.eventSegments,
      sponsorship_goals: data.preferences.goals,
      target_audience: data.preferences.targetAudience,
      company_tagline: data.branding.companyTagline,
      custom_branding_requests: data.branding.brandingRequests,
      contribution_type: data.contribution.type,
      contribution_details: data.contribution.inKindDetails,
      contribution_range: data.contribution.amount,
      company_background: data.additionalInfo.companyBackground,
      previous_sponsorships: {
        has_previous: data.additionalInfo.hasPreviousSponsorship,
        details: data.additionalInfo.previousSponsorshipDetails,
      },
      event_participation: {
        will_participate: data.additionalInfo.willParticipate,
        attendee_count: data.additionalInfo.attendeeCount,
        vip_requirements: data.additionalInfo.vipRequirements,
      },
      terms_accepted: data.agreement.termsAccepted,
      signature_data: {
        signature: data.agreement.signature,
        signed_at: new Date().toISOString(),
      },
    });

  if (dbError) throw dbError;
};
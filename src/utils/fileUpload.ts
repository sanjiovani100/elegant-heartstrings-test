import { supabase } from "@/integrations/supabase/client";

export const uploadSponsorshipFile = async (
  file: File,
  userId: string,
  type: 'logo' | 'promo' | 'document'
): Promise<string> => {
  try {
    const fileExt = file.name.split('.').pop();
    const sanitizedFileName = file.name.replace(/[^\x00-\x7F]/g, '');
    const fileName = `${userId}/${type}/${crypto.randomUUID()}.${fileExt}`;

    const { error: uploadError, data } = await supabase.storage
      .from('sponsorship-assets')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('sponsorship-assets')
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
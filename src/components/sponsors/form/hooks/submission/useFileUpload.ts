import { supabase } from "@/integrations/supabase/client";

export const uploadFile = async (file: File, userId: string, type: 'logo' | 'promo') => {
  const fileExt = file.name.split(".").pop();
  const filePath = `${userId}/${type}-${Date.now()}.${fileExt}`;
  
  const { error: uploadError, data } = await supabase.storage
    .from("sponsorship-assets")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from("sponsorship-assets")
    .getPublicUrl(filePath);
  
  return publicUrl;
};

export const uploadFiles = async (files: File[], userId: string, type: 'logo' | 'promo') => {
  return Promise.all(files.map(file => uploadFile(file, userId, type)));
};
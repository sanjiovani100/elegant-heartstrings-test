import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ModelImage {
  id: string;
  url: string;
  caption: string;
}

export const useModelGallery = () => {
  const [images, setImages] = useState<ModelImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const { data, error } = await supabase
          .from('media_collections')
          .select(`
            id,
            media_items (
              id,
              storage_path,
              caption
            )
          `)
          .eq('type', 'gallery')
          .single();

        if (error) throw error;

        if (data?.media_items) {
          const formattedImages = data.media_items.map((item: any) => ({
            id: item.id,
            url: item.storage_path,
            caption: item.caption || '',
          }));
          setImages(formattedImages);
        }
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load gallery images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return {
    images,
    isLoading,
    error,
  };
};
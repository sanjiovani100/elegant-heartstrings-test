import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AvatarUploadProps {
  avatarUrl: string | null;
  userInitial: string;
  onAvatarUpdate: (url: string) => void;
}

const AvatarUpload = ({ avatarUrl, userInitial, onAvatarUpdate }: AvatarUploadProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("No user found");

      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      onAvatarUpdate(publicUrl);
      
      toast({
        title: "Success",
        description: "Avatar updated successfully",
      });
    } catch (error) {
      console.error("Error uploading avatar:", error);
      toast({
        title: "Error",
        description: "Failed to update avatar",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatarUrl || ""} />
        <AvatarFallback>{userInitial}</AvatarFallback>
      </Avatar>
      <div>
        <Input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          disabled={loading}
          className="hidden"
          id="avatar-upload"
        />
        <Label
          htmlFor="avatar-upload"
          className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          {loading ? "Uploading..." : "Upload Avatar"}
        </Label>
      </div>
    </div>
  );
};

export default AvatarUpload;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AvatarUpload from "./AvatarUpload";
import ProfileStatus from "./ProfileStatus";
import ProfileFormFields from "./ProfileFormFields";
import { useProfileForm } from "./useProfileForm";

const ProfileForm = () => {
  const {
    form,
    loading,
    avatarUrl,
    profileStatus,
    setAvatarUrl,
    onSubmit,
  } = useProfileForm();

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="space-y-8">
        <ProfileStatus status={profileStatus} />
        
        <AvatarUpload
          avatarUrl={avatarUrl}
          userInitial={form.watch("fullName")?.[0]?.toUpperCase() || "U"}
          onAvatarUpdate={setAvatarUrl}
        />

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProfileFormFields form={form} loading={loading} />
          
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ProfileForm;
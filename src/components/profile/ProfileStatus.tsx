import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ProfileStatusProps {
  status: 'complete' | 'incomplete';
}

const ProfileStatus = ({ status }: ProfileStatusProps) => {
  if (status === 'incomplete') {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Please complete your profile by adding all required information.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="mb-4 bg-green-50 border-green-200">
      <CheckCircle2 className="h-4 w-4 text-green-500" />
      <AlertDescription className="text-green-700">
        Your profile is complete!
      </AlertDescription>
    </Alert>
  );
};

export default ProfileStatus;
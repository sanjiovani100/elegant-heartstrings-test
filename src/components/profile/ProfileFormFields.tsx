import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ProfileFormData {
  fullName: string;
  phoneNumber: string;
}

interface ProfileFormFieldsProps {
  form: UseFormReturn<ProfileFormData>;
  loading: boolean;
}

const ProfileFormFields = ({ form, loading }: ProfileFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          {...form.register("fullName")}
          disabled={loading}
          placeholder="Enter your full name"
        />
        {form.formState.errors.fullName && (
          <p className="text-sm text-red-500">
            {form.formState.errors.fullName.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          {...form.register("phoneNumber")}
          disabled={loading}
          placeholder="Enter your phone number"
        />
        {form.formState.errors.phoneNumber && (
          <p className="text-sm text-red-500">
            {form.formState.errors.phoneNumber.message}
          </p>
        )}
      </div>
    </>
  );
};

export default ProfileFormFields;
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Database } from "@/integrations/supabase/types";

type UserRole = Database["public"]["Enums"]["user_role"];

interface UserRoleSelectProps {
  currentRole: UserRole | undefined;
  onRoleChange: (role: UserRole) => void;
  disabled?: boolean;
}

const UserRoleSelect = ({ currentRole, onRoleChange, disabled }: UserRoleSelectProps) => {
  return (
    <Select
      value={currentRole || ""}
      onValueChange={(value: UserRole) => onRoleChange(value)}
      disabled={disabled}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="model">Model</SelectItem>
        <SelectItem value="designer">Designer</SelectItem>
        <SelectItem value="sponsor">Sponsor</SelectItem>
        <SelectItem value="visitor">Visitor</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserRoleSelect;
import { Card } from "@/components/ui/card";
import type { Database } from "@/integrations/supabase/types";
import UserRoleSelect from "./UserRoleSelect";

type UserRole = Database["public"]["Enums"]["user_role"];

interface User {
  id: string;
  email: string;
  role?: UserRole;
}

interface UserRoleListProps {
  users: User[];
  isLoading: boolean;
  onRoleChange: (userId: string, role: UserRole) => void;
}

const UserRoleList = ({ users, isLoading, onRoleChange }: UserRoleListProps) => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{user.email}</p>
              <p className="text-sm text-gray-500">ID: {user.id}</p>
            </div>
            <UserRoleSelect
              currentRole={user.role}
              onRoleChange={(role) => onRoleChange(user.id, role)}
              disabled={isLoading}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserRoleList;
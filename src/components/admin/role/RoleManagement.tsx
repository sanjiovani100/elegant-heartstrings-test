import { Loader2 } from "lucide-react";
import UserRoleList from "./UserRoleList";
import { useUserRoles } from "./useUserRoles";

const RoleManagement = () => {
  const { users, isLoading, updateUserRole } = useUserRoles();

  if (isLoading && users.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Role Management</h2>
      <UserRoleList
        users={users}
        isLoading={isLoading}
        onRoleChange={updateUserRole}
      />
    </div>
  );
};

export default RoleManagement;
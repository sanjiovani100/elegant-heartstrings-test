import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserRole } from "@/hooks/use-user-role";

export function ProfileSection() {
  const { role } = useUserRole();
  
  return (
    <div className="px-4 py-2 mb-6">
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-montserrat font-medium text-sponsor-text-primary">Admin User</p>
          <p className="text-sm text-sponsor-text-secondary">{role}</p>
        </div>
      </div>
    </div>
  );
}
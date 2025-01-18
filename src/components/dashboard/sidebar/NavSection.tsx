import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Palette,
  Award,
  Calendar,
  Ticket,
  BarChart,
  FileText,
  Folder,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Models", path: "/models" },
  { icon: Palette, label: "Designers", path: "/designer" },
  { icon: Award, label: "Sponsors", path: "/sponsors" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: Ticket, label: "Tickets", path: "/tickets" },
  { icon: BarChart, label: "Analytics", path: "/analytics" },
  { icon: FileText, label: "Content", path: "/content" },
  { icon: Folder, label: "Resources", path: "/resources" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function NavSection() {
  return (
    <nav className="space-y-1 px-2">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
            ${isActive
              ? "bg-fashionista-pink/10 text-fashionista-red"
              : "text-sponsor-text-secondary hover:bg-gray-50 hover:text-sponsor-text-primary"
            }`
          }
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
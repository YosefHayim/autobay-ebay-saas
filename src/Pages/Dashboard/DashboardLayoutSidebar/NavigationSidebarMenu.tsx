import { Calendar, User, BarChart2, Settings, LogOut, Layers, CreditCard, Users, Puzzle } from "lucide-react";

export const NavigationSidebarMenu = [
  {
    label: "Calendar",
    icon: <Calendar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Profile",
    icon: <User className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Services",
    icon: <Layers className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />, // represents grouped features/services
  },
  {
    label: "Payments",
    icon: <CreditCard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Customers",
    icon: <Users className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Integrations",
    icon: <Puzzle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />, // represents integrations/plugins
  },
  {
    label: "Analytics",
    icon: <BarChart2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Settings",
    icon: <Settings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Logout",
    icon: <LogOut className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

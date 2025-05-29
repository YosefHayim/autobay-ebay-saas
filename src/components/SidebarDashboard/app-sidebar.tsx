import * as React from "react";
import { CalendarClock, Scissors, CreditCard, Users, Settings, Phone, MapPin, Clock, Globe, Sun, Moon } from "lucide-react";
import { NavUser } from "@/components/SidebarDashboard/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { useActiveView } from "@/hooks/use-active-view";
import { handleSidebarButtonClick } from "@/handlers/handleSidebarView";
import { NavMain } from "./nav-main";
import CustomToggleButton from "../ToggleThemeButton/ToggleThemeButton";
import ToggleTheme from "../ToggleThemeButton/ToggleThemeButton";

const data = {
  user: {
    name: "john doe",
    email: "john.doe@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Appointments",
      url: "#",
      icon: CalendarClock,
    },
    {
      title: "Services",
      icon: Scissors,
    },
    {
      title: "Payments",
      icon: CreditCard,
    },
    {
      title: "Customers",
      icon: Users,
    },
    {
      title: "Settings",
      icon: Settings,
      items: [
        {
          title: "General",
        },
        {
          title: "Contact details",
          icon: Phone,
        },
        {
          title: "Location",
          icon: MapPin,
        },
        {
          title: "Business hours",
          icon: Clock,
        },
        {
          title: "Social links",
          icon: Globe,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { activeView, setActiveView } = useActiveView();

  React.useEffect(() => {
    return () => {};
  }, [activeView]);

  return (
    <Sidebar collapsible="icon" {...props} onClick={(e) => handleSidebarButtonClick(e, setActiveView)}>
      <SidebarContent className="w-full">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ToggleTheme />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

import * as React from "react";
import { CalendarClock, Scissors, CreditCard, Users, Settings, Phone, MapPin, Clock, Globe } from "lucide-react";
import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { ToggleTheme } from "../ToggleTheme";

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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="w-full">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ToggleTheme withoutClass={true} />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

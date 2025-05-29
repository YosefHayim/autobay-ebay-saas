import * as React from "react";
import { CalendarClock, Scissors, CreditCard, Users, Settings, Phone, MapPin, Clock, Globe } from "lucide-react";
import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { Logo } from "../Logo";
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
      <SidebarHeader>
        <Logo />
        <ToggleTheme />
      </SidebarHeader>
      <hr />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

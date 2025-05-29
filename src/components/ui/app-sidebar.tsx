import * as React from "react";
import { CalendarClock, Scissors, CreditCard, Users, Settings, Phone, MapPin, Clock, Globe } from "lucide-react";
import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { Logo } from "../Logo";

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
      isActive: true,
      items: [],
    },
    {
      title: "Services",
      url: "#",
      icon: Scissors,
      items: [],
    },
    {
      title: "Payments",
      url: "#",
      icon: CreditCard,
      items: [],
    },
    {
      title: "Customers",
      url: "#",
      icon: Users,
      items: [],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Contact details",
          url: "#",
          icon: Phone,
        },
        {
          title: "Location",
          url: "#",
          icon: MapPin,
        },
        {
          title: "Business hours",
          url: "#",
          icon: Clock,
        },
        {
          title: "Social links",
          url: "#",
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

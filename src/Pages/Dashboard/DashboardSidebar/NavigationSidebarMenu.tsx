import { IconSettings } from "@tabler/icons-react";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const NavigationSidebarMenu = [
  {
    label: "Calendar",
    icon: <FaRegCalendarAlt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Profile",
    icon: <CgProfile className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Settings",
    icon: <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Logout",
    icon: <IoIosLogOut className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

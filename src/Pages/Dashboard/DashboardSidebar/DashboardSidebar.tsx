"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router";
import { links } from "./NavigationSidebarMenu";
import { Calendar } from "../Calendar";
import { Profile } from "@/Pages/Profile";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const chosenUi = () => {
    switch (value) {
      case "calendar":
        return <Calendar />;
      case "profile":
        return <Profile />;

      default:
        return <></>;
    }
  };

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open && (
              <Link to="/dashboard">
                <Logo />
              </Link>
            )}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: <img src="https://assets.aceternity.com/manu.png" className="h-7 w-7 shrink-0 rounded-full" width={50} height={50} alt="Avatar" />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {chosenUi()}
    </div>
  );
};

export default DashboardSidebar;

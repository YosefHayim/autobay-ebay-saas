"use client";
import { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarButton } from "../../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router";
import { NavigationSidebarMenu } from "./NavigationSidebarMenu";
import { ToggleTheme } from "@/components/ToggleTheme";
import Profile from "@/Pages/Profile";
import { Calendar } from "../Calendar";
import Services from "../Services";
import Payments from "../Payments";

const DashboardLayoutSidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState("calendar");

  const handleSidebarButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const btn = target.closest("button");
    if (btn instanceof HTMLButtonElement) {
      const activeView = btn.dataset.value;

      switch (activeView) {
        case "calendar":
          setActiveView("calendar");
          break;

        case "profile":
          setActiveView("profile");
          break;

        case "settings":
          setActiveView("settings");
          break;

        default:
          setActiveView("calendar");
          break;
      }
    }
  };

  const renderActiveView = (activeView: string) => {
    switch (activeView) {
      case "calendar":
        return <Calendar />;
      case "profile":
        return <Profile />;
      default:
        return <Calendar />;
      case "services":
        return <Services />;

      case "payments":
        return <Payments />;
    }
  };

  useEffect(() => {
    return () => {};
  }, [activeView]);

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
            <div className="mt-8 flex flex-col gap-2" onClick={handleSidebarButtonClick}>
              {NavigationSidebarMenu.map((btn) => (
                <SidebarButton key={btn.label} btn={btn} />
              ))}
            </div>
          </div>
          <div>
            <ToggleTheme />

            {/* 
Add here icon of business of the customer
            */}
          </div>
        </SidebarBody>
      </Sidebar>
      {renderActiveView(activeView)}
    </div>
  );
};

export default DashboardLayoutSidebar;

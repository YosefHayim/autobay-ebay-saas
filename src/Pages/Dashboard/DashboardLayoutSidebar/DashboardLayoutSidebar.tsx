"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarButton } from "../../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router";
import { NavigationSidebarMenu } from "./NavigationSidebarMenu";
import { ToggleTheme } from "@/components/ToggleTheme";
import { handleSidebarButtonClick } from "@/handlers/handleSidebarView";
import { useRenderActiveViewDashboard } from "@/hooks/useRenderActiveViewDashboard";

const DashboardLayoutSidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState("calendar");

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
            <div className="mt-8 flex flex-col gap-2" onClick={(e) => handleSidebarButtonClick(e, setActiveView)}>
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
      {useRenderActiveViewDashboard(activeView)}
    </div>
  );
};

export default DashboardLayoutSidebar;

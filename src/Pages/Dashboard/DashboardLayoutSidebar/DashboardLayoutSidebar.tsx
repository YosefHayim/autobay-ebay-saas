"use client";
import { useEffect, useState } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router";
import { NavigationSidebarMenu } from "./NavigationSidebarMenu";
import { ToggleTheme } from "@/components/ToggleTheme";
import { handleSidebarButtonClick } from "@/handlers/handleSidebarView";
import { useRenderActiveViewDashboard } from "@/hooks/useRenderActiveViewDashboard";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";

const DashboardLayoutSidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState("calendar");

  useEffect(() => {
    setOpen(false);
    return () => {};
  }, [activeView]);

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen",
      )}
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayoutSidebar;

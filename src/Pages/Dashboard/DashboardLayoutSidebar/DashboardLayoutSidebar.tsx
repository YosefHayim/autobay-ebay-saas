"use client";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useRenderActiveViewDashboard } from "@/hooks/use-render-active-view-dashboard";
import { AppSidebar } from "@/components/SidebarDashboard/app-sidebar";
import { useActiveView } from "@/hooks/use-active-view";

const DashboardLayoutSidebar = () => {
  const { activeView } = useActiveView();

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
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{useRenderActiveViewDashboard(activeView)}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayoutSidebar;

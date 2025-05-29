import type { ActiveViewContextType } from "@/contexts/active-view/active-view-context";
import { createContext, useContext } from "react";

export const ActiveViewContext = createContext<ActiveViewContextType | undefined>(undefined);

export const useActiveView = () => {
  const context = useContext(ActiveViewContext);
  if (context === undefined) {
    throw new Error("useActiveView must be used within an ActiveViewProvider");
  }
  return context;
};

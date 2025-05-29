import { ActiveViewContext } from "@/hooks/use-active-view";
import { useState, type ReactNode } from "react";

export interface ActiveViewContextType {
  activeView: string | null;
  setActiveView: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ActiveViewProvider = ({ children }: { children: ReactNode }) => {
  const [activeView, setActiveView] = useState<string | null>(null);

  return <ActiveViewContext.Provider value={{ activeView, setActiveView }}>{children}</ActiveViewContext.Provider>;
};

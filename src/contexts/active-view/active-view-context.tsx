import { ActiveViewContext } from "@/hooks/use-active-view";
import { useState, type ReactNode } from "react";

export interface ActiveViewContextType {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveViewProvider = ({ children }: { children: ReactNode }) => {
  const [activeView, setActiveView] = useState<string>("appointments");

  return <ActiveViewContext.Provider value={{ activeView, setActiveView }}>{children}</ActiveViewContext.Provider>;
};

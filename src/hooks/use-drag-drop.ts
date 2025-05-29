import type { DragDropContextType } from "@/contexts/CalendarContext/drag-drop-context";
import { createContext, useContext } from "react";

export const DragDropContext = createContext<DragDropContextType | undefined>(undefined);

export function useDragDrop() {
  const context = useContext(DragDropContext);
  if (context === undefined) {
    throw new Error("useDragDrop must be used within a DragDropProvider");
  }
  return context;
}

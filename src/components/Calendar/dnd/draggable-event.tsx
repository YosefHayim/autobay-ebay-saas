import { motion } from "framer-motion";
import { useDragDrop } from "../contexts/drag-drop-context";
import { EventDetailsDialog } from "../dialogs/event-details-dialog";
import type { IEvent } from "../interfaces";
import type { ReactNode } from "react";

interface DraggableEventProps {
  event: IEvent;
  children: ReactNode;
  className?: string;
}

export function DraggableEvent({ event, children, className }: DraggableEventProps) {
  const { startDrag, endDrag, isDragging, draggedEvent } = useDragDrop();

  const isCurrentlyDragged = isDragging && draggedEvent?.id === event.id;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <EventDetailsDialog event={event}>
      <motion.div
        className={`${className || ""} ${isCurrentlyDragged ? "cursor-grabbing opacity-50" : "cursor-grab"}`}
        draggable
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)}
        onDragStart={(e) => {
          (e as DragEvent).dataTransfer!.setData("text/plain", event.id.toString());
          startDrag(event);
        }}
        onDragEnd={() => {
          endDrag();
        }}
      >
        {children}
      </motion.div>
    </EventDetailsDialog>
  );
}

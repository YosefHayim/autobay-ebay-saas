"use client";

import { useMemo } from "react";
import { isToday, startOfDay } from "date-fns";
import { motion } from "framer-motion";

import { EventBullet } from "./event-bullet";
import { MonthEventBadge } from "./month-event-badge";

import { getMonthCellEvents } from "../helpers";
import { staggerContainer, transition } from "../animations";

import type { ICalendarCell, IEvent } from "../interfaces";
import { cn } from "@/lib/utils";
import { DroppableArea } from "../dnd/droppable-area";
import { EventListDialog } from "../dialogs/events-list-dialog";

interface IProps {
  cell: ICalendarCell;
  events: IEvent[];
  eventPositions: Record<string, number>;
}

const MAX_VISIBLE_EVENTS = 3;

export function DayCell({ cell, events, eventPositions }: IProps) {
  const { day, currentMonth, date } = cell;

  const cellEvents = useMemo(() => getMonthCellEvents(date, events, eventPositions), [date, events, eventPositions]);
  const isSunday = date.getDay() === 0;

  return (
    <motion.div
      className={cn("flex flex-col gap-1 border-t border-l py-1.5", isSunday && "border-l-0")}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <DroppableArea date={date}>
        <motion.span
          className={cn(
            "mb-1 flex h-6 w-6 translate-x-1 items-center justify-center rounded-full px-1 text-xs font-semibold lg:px-2", // mb-0.5 here, always applied
            !currentMonth && "text-muted-foreground",
            isToday(date) && "bg-primary text-primary-foreground",
          )}
          whileHover={{ scale: 1.1 }}
          transition={transition}
        >
          {day}
        </motion.span>

        <motion.div
          className={cn("flex h-6 gap-1 px-2 lg:min-h-[94px] lg:flex-col lg:gap-2 lg:px-0", !currentMonth && "opacity-50")}
          variants={staggerContainer}
        >
          {[0, 1, 2]?.map((position) => {
            const event = cellEvents.find((e) => e.position === position);
            const eventKey = event ? `event-${event.id}-${position}` : `empty-${position}`;

            return (
              <motion.div
                key={eventKey}
                className="lg:flex-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: position * 0.1, ...transition }}
              >
                {event && (
                  <>
                    <EventBullet className="lg:hidden" color={event.color} />
                    <MonthEventBadge className="hidden lg:flex" event={event} cellDate={startOfDay(date)} />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {cellEvents.length > MAX_VISIBLE_EVENTS && (
          <motion.div
            className={cn("text-muted-foreground my-2 h-4.5 px-1.5 text-end text-xs font-semibold", !currentMonth && "opacity-50")}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...transition }}
          >
            <EventListDialog date={date} events={cellEvents} />
          </motion.div>
        )}
      </DroppableArea>
    </motion.div>
  );
}

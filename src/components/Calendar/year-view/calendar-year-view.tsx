import { motion } from "framer-motion";
import { getYear, isSameDay, isSameMonth } from "date-fns";
import { useCalendar } from "../contexts/calendar-context";
import { staggerContainer, transition } from "../animations";
import { getCalendarCells } from "../helpers";
import { cn } from "@/lib/utils";
import { EventBullet } from "../month-view/event-bullet";
import { EventListDialog } from "../dialogs/events-list-dialog";
import type { IEvent } from "../interfaces";

interface IProps {
  singleDayEvents: IEvent[];
  multiDayEvents: IEvent[];
}

const MONTHS = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

const WEEKDAYS = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "שבת"];

export function CalendarYearView({ singleDayEvents, multiDayEvents }: IProps) {
  const { selectedDate, setSelectedDate } = useCalendar();
  const currentYear = getYear(selectedDate);
  const allEvents = [...multiDayEvents, ...singleDayEvents];

  return (
    <div className="flex h-[80vh] flex-col overflow-hidden p-5">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid flex-grow auto-rows-fr grid-cols-3 gap-4 overflow-hidden lg:grid-cols-4"
      >
        {MONTHS.map((month, monthIndex) => {
          const monthDate = new Date(currentYear, monthIndex, 1);
          const cells = getCalendarCells(monthDate);

          return (
            <motion.div
              key={month}
              className="flex h-full flex-col overflow-hidden rounded-md border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: monthIndex * 0.05, ...transition }}
            >
              <div
                className="bg-primary/5 hover:bg-primary/10 cursor-pointer px-1 py-1 text-center text-xs font-medium transition-colors sm:text-sm"
                onClick={() => setSelectedDate(new Date(currentYear, monthIndex, 1))}
              >
                {month}
              </div>

              <div className="grid grid-cols-7 py-1 text-center text-xs">
                {WEEKDAYS.map((day) => (
                  <div key={day} className="text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid flex-grow grid-cols-7 gap-0 p-0.5">
                {cells.map((cell) => {
                  const isCurrentMonth = isSameMonth(cell.date, monthDate);
                  const isToday = isSameDay(cell.date, new Date());
                  const dayEvents = allEvents.filter((event) => isSameDay(new Date(event.startDate), cell.date));
                  const hasEvents = dayEvents.length > 0;

                  return (
                    <div
                      key={cell.date.toISOString()}
                      className={cn(
                        "relative flex flex-col items-center justify-center text-xs",
                        !isCurrentMonth && "text-muted-foreground/50",
                        isToday && "font-bold",
                        !hasEvents && "cursor-default",
                      )}
                    >
                      {hasEvents ? (
                        <EventListDialog date={cell.date} events={dayEvents}>
                          <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                            <span
                              className={cn("flex size-4 items-center justify-center sm:size-5", isToday && "bg-primary text-primary-foreground rounded-full")}
                            >
                              {cell.day}
                            </span>
                            <div className="flex items-center justify-center gap-0.5">
                              {dayEvents.length <= 2 ? (
                                dayEvents.slice(0, 2).map((event) => <EventBullet key={event.id} color={event.color} className="size-1" />)
                              ) : (
                                <>
                                  <EventBullet color={dayEvents[0].color} className="size-1" />
                                  <span className="text-muted-foreground text-[.7rem]">+{dayEvents.length - 1}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </EventListDialog>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center">
                          <span
                            className={cn("flex size-4 items-center justify-center sm:size-5", isToday && "bg-primary text-primary-foreground rounded-full")}
                          >
                            {cell.day}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

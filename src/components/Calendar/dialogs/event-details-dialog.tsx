"use client";

import { format, parseISO } from "date-fns";
import { Calendar, Clock, Text, User } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useCalendar } from "../contexts/calendar-context";
import { formatTime } from "../helpers";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { IEvent } from "../interfaces";
import type { ReactNode } from "react";
import { AddEditEventDialog } from "./add-edit-event-dialog";

interface IProps {
  event: IEvent;
  children: ReactNode;
}

export function EventDetailsDialog({ event, children }: IProps) {
  const startDate = parseISO(event.startDate);
  const endDate = parseISO(event.endDate);
  const { use24HourFormat, removeEvent } = useCalendar();

  const deleteEvent = (eventId: number) => {
    try {
      removeEvent(eventId);
      toast.success("אירוע נמחק בהצלחה");
    } catch {
      toast.error("שגיאה במחיקת אירוע");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-4 p-4">
            <div className="flex items-start gap-2">
              <User className="text-muted-foreground mt-1 size-4 shrink-0" />
              <div>
                <p className="text-sm font-medium">אחראי</p>
                <p className="text-muted-foreground text-sm">{event.user.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="text-muted-foreground mt-1 size-4 shrink-0" />
              <div>
                <p className="text-sm font-medium">תאריך התחלה</p>
                <p className="text-muted-foreground text-sm">
                  {format(startDate, "dd EEEE MMMM")}
                  <span className="mx-1">ב-</span>
                  {formatTime(parseISO(event.startDate), use24HourFormat)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Clock className="text-muted-foreground mt-1 size-4 shrink-0" />
              <div>
                <p className="text-sm font-medium">תאריך סיום</p>
                <p className="text-muted-foreground text-sm">
                  {format(endDate, "dd EEEE MMMM")}
                  <span className="mx-1">ב-</span>
                  {formatTime(parseISO(event.endDate), use24HourFormat)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Text className="text-muted-foreground mt-1 size-4 shrink-0" />
              <div>
                <p className="text-sm font-medium">תיאור</p>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-2">
          <AddEditEventDialog event={event}>
            <Button variant="outline">ערוך</Button>
          </AddEditEventDialog>
          <Button
            variant="destructive"
            onClick={() => {
              deleteEvent(event.id);
            }}
          >
            מחק
          </Button>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}

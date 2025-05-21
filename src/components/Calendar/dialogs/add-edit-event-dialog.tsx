import { useForm } from "react-hook-form";
import { format, addMinutes, set } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { toast } from "sonner";

import { useDisclosure } from "../hooks";
import { useCalendar } from "../contexts/calendar-context";
import { eventSchema, type TEventFormData } from "../schemas";
import { COLORS } from "../constants";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import type { IEvent } from "../interfaces";

interface IProps {
  children: ReactNode;
  startDate?: Date;
  startTime?: { hour: number; minute: number };
  event?: IEvent;
}

export function AddEditEventDialog({ children, startDate, startTime, event }: IProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { addEvent, updateEvent } = useCalendar();
  const isEditing = !!event;

  const getInitialDates = () => {
    if (!startDate) return { startDate: new Date(), endDate: addMinutes(new Date(), 30) };
    const start = startTime ? set(new Date(startDate), { hours: startTime.hour, minutes: startTime.minute, seconds: 0 }) : new Date(startDate);
    const end = addMinutes(start, 30);
    return { startDate: start, endDate: end };
  };

  const initialDates = getInitialDates();

  const parseEventDates = () => {
    if (!event) return null;

    return {
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    };
  };

  const eventDates = parseEventDates();

  const form = useForm<TEventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: isEditing
      ? {
          title: event.title,
          description: event.description,
          startDate: eventDates?.startDate,
          endDate: eventDates?.endDate,
          color: event.color,
        }
      : {
          title: "",
          description: "",
          startDate: initialDates.startDate,
          endDate: initialDates.endDate,
          color: "blue" as const,
        },
  });

  const onSubmit = (values: TEventFormData) => {
    try {
      // Format event data for API
      const formattedEvent: IEvent = {
        ...values,
        startDate: format(values.startDate, "dd-MM-yyyy'T'HH:mm:ss"),
        endDate: format(values.endDate, "dd-MM-yyyy'T'HH:mm:ss"),
        id: isEditing ? event.id : Math.floor(Math.random() * 1000000),
        user: isEditing
          ? event.user
          : {
              id: Math.floor(Math.random() * 1000000).toString(),
              name: "Jeraidi Yassir",
              picturePath: null,
            },
        color: values.color,
      };

      if (isEditing) {
        updateEvent(formattedEvent);
        toast.success("אירוע עודכן בהצלחה");
      } else {
        addEvent(formattedEvent);
        toast.success("אירוע נוצר בהצלחה");
      }

      onClose();
      form.reset();
    } catch (error) {
      console.error(`Error ${isEditing ? "editing" : "adding"} event:`, error);
      toast.error(`נכשל ${isEditing ? "לערוך" : "להוסיף"} אירוע`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onToggle} modal={false}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? "ערוך אירוע" : "הוסף אירוע חדש"}</DialogTitle>
          <DialogDescription>{isEditing ? "ערוך את האירוע הנוכחי." : "צור אירוע חדש עבור היומן שלך."}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form id="event-form" onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="title" className="required">
                    כותרת
                  </FormLabel>
                  <FormControl>
                    <Input id="title" placeholder="כתוב כותרת" {...field} className={fieldState.invalid ? "border-red-500" : ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="startDate" render={({ field }) => <DateTimePicker form={form} field={field} />} />
            <FormField control={form.control} name="endDate" render={({ field }) => <DateTimePicker form={form} field={field} />} />
            <FormField
              control={form.control}
              name="color"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="required">צבע</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className={`w-full ${fieldState.invalid ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="בחר צבע" />
                      </SelectTrigger>
                      <SelectContent>
                        {COLORS.map((color) => (
                          <SelectItem value={color} key={color}>
                            <div className="flex items-center gap-2">
                              <div className={`size-3.5 rounded-full bg-${color}-600 dark:bg-${color}-700`} />
                              {color}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="required">תיאור</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="כתוב תיאור" className={fieldState.invalid ? "border-red-500" : ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              בטל
            </Button>
          </DialogClose>
          <Button form="event-form" type="submit">
            {isEditing ? "שמור שיניים" : "צור אירוע"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { CalendarBody } from "./calendar-body";
import { CalendarProvider } from "./contexts/calendar-context";
import { DragDropProvider } from "./contexts/drag-drop-context";
import { EventUpdateHandler } from "./event-update-handler";
import { CalendarHeader } from "./header/calendar-header";
import { getEvents, getUsers } from "./requests";

async function getCalendarData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    events: await getEvents(),
    users: await getUsers(),
  };
}

export async function Calendar() {
  const { events, users } = await getCalendarData();

  return (
    <DragDropProvider>
      <CalendarProvider events={events} users={users} view="month">
        <div className="w-full rounded-xl border">
          <EventUpdateHandler />
          <CalendarHeader />
          <CalendarBody />
        </div>
      </CalendarProvider>
    </DragDropProvider>
  );
}

import { CalendarProvider } from "./contexts/calendar-context";
import { CalendarBody } from "./calendar-body";

import { EventUpdateHandler } from "./event-update-handler";
import { DragDropProvider } from "./contexts/drag-drop-context";
import { getEvents, getUsers } from "./requests";
import { CalendarHeader } from "./header/calendar-header";

async function getCalendarData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    events: await getEvents(),
    users: await getUsers(),
  };
}

const Calendar = async () => {
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
};

export default Calendar;

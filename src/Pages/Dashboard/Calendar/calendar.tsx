import { useEffect, useState } from "react";
import { CalendarProvider } from "../../../contexts/CalendarContext/calendar-context";
import { CalendarBody } from "./calendar-body";
import { EventUpdateHandler } from "./event-update-handler";
import { DragDropProvider } from "../../../contexts/CalendarContext/drag-drop-context";
import { CalendarHeader } from "./header/calendar-header";
import Loader from "@/components/Loader/Loader";

async function getCalendarData() {
  // placeholder for getting data for specific user
}

const Calendar = () => {
  const [events, setEvents] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { events, users } = await getCalendarData();
      setEvents(events);
      setUsers(users);
    };

    fetchData();

    return () => {};
  }, []);

  // Render nothing until data is loaded
  // if (!events || !users) return <Loader />;

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

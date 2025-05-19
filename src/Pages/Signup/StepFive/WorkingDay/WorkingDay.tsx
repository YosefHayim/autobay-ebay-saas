import WorkingHours from "../WorkingHours/WorkingHours";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

const hebrewDayMap: Record<string, string> = {
  Sunday: "יום א׳",
  Monday: "יום ב׳",
  Tuesday: "יום ג׳",
  Wednesday: "יום ד׳",
  Thursday: "יום ה׳",
  Friday: "יום ו׳",
  Saturday: "שבת",
};

const WorkingDay: React.FC<{ day: string }> = ({ day }) => {
  const hebrewDay = hebrewDayMap[day];
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="flex w-full items-center justify-between py-2">
      <p>{hebrewDay}</p>
      <WorkingHours day={day} isOpen="open" />
      <WorkingHours day={day} isOpen="close" />
      <Toggle
        variant="outline"
        className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
        pressed={theme === "dark"}
        onPressedChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <MdToggleOn
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <MdToggleOff
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
};

export default WorkingDay;

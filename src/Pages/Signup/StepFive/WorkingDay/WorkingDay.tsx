import WorkingHours from "../WorkingHours/WorkingHours";

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

  return (
    <div className="flex w-full items-center justify-between py-2">
      <p>{hebrewDay}</p>
      <WorkingHours day={day} isOpen="open" />
      <WorkingHours day={day} isOpen="close" />
    </div>
  );
};

export default WorkingDay;

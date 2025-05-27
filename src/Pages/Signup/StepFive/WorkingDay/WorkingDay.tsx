import WorkingHours from "../WorkingHours/WorkingHours";

const NameOfDay: Record<string, string> = {
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
};

const WorkingDay: React.FC<{ day: string }> = ({ day }) => {
  const DayStr = NameOfDay[day];

  return (
    <div className="flex w-full items-center justify-between py-2">
      <p>{DayStr}</p>
      <WorkingHours day={day} isOpen="open" />
      <WorkingHours day={day} isOpen="close" />
    </div>
  );
};

export default WorkingDay;

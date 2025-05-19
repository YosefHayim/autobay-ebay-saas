import WorkingHours from "../WorkingHours/WorkingHours";

const hebrewDayMap: Record<string, string> = {
  Sunday: "יום ראשון",
  Monday: "יום שני",
  Tuesday: "יום שלישי",
  Wednesday: "יום רביעי",
  Thursday: "יום חמישי",
  Friday: "יום שישי",
  Saturday: "יום שבת",
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

import WorkingHours from "../WorkingHours/WorkingHours";

const WorkingDay: React.FC<{ day: string }> = ({ day }) => {
  return (
    <div className="flex w-full items-center justify-between py-2">
      <p>{day}</p>
      <WorkingHours day={day} isOpen="open" />
      <WorkingHours day={day} isOpen="close" />
    </div>
  );
};

export default WorkingDay;

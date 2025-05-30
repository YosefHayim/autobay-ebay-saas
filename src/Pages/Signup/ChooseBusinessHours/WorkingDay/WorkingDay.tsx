import { ToggleOpenCloseButton } from "../ToggleOpenCloseButton";
import { WorkingHours } from "../WorkingHours";

const WorkingDay: React.FC<{ day: string }> = ({ day }) => {
  return (
    <div className="flex w-full items-center justify-between py-2">
      <p>{day}</p>
      <div className="flex flex-col gap-2">
        <p>Open from</p>
        <WorkingHours day={day} isOpen="open" />
      </div>
      <div className="flex flex-col gap-2">
        <p>Until</p>
        <WorkingHours day={day} isOpen="close" />
      </div>
      <ToggleOpenCloseButton />
    </div>
  );
};

export default WorkingDay;

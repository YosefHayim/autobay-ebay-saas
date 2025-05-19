import { workingTimes } from "../workingTimes";

const WorkingHours: React.FC<{ day: string; isOpen: "open" | "close" }> = ({ day, isOpen }) => {
  return (
    <div className="flex items-center justify-around gap-3">
      <select name={`${isOpen}-time-${day}`} className="w-min">
        {workingTimes.map((hour) => (
          <option value={hour} key={hour}>
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkingHours;

import { workingTimes } from "../workingTimes";

const WorkingHours: React.FC<{ day: string; isOpen: "open" | "close" }> = ({ day, isOpen }) => {
  return (
    <div className="flex w-full items-center justify-around gap-3">
      <select name={`${isOpen}-time-${day}`} className="rounded-sm border border-gray-300 p-2" defaultValue={"Choose time"}>
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

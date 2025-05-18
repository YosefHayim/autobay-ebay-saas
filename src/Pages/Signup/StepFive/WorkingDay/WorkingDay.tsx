import { workingHours } from "../workingHours";

const WorkingDay = () => {
  return (
    <div className="flex w-full items-center justify-around gap-3">
      <select name="" id="">
        {workingHours.map((hour) => (
          <option value={hour} key={hour}>
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkingDay;

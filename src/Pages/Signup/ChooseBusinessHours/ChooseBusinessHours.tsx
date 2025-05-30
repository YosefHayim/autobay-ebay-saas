import type { ReactNode } from "react";
import WorkingDay from "./WorkingDay/WorkingDay";

const BusinessHours: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <div className="w-full text-center">{children}</div>
      <form className="flex w-full flex-col items-start justify-start gap-2">
        <WorkingDay day="Sun" />
        <hr className="w-full" />
        <WorkingDay day="Mon" />
        <hr className="w-full" />
        <WorkingDay day="Tue" />
        <hr className="w-full" />
        <WorkingDay day="Wed" />
        <hr className="w-full" />
        <WorkingDay day="Thu" />
        <hr className="w-full" />
        <WorkingDay day="Fri" />
        <hr className="w-full" />
        <WorkingDay day="Sat" />
      </form>
    </section>
  );
};

export default BusinessHours;

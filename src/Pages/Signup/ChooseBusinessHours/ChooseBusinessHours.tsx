import WorkingDay from "./WorkingDay/WorkingDay";

const BusinessHours = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">When can customers schedule appointments?</h1>
      <p>You can change the activity hours later, this isnt permanet.</p>
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

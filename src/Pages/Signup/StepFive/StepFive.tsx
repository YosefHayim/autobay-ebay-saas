import WorkingDay from "./WorkingDay/WorkingDay";

const StepFive = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">When can customers schedule appointments?</h1>
      <p>You can change the activity hours later, this isnt permanet.</p>
      <form className="flex w-2/3 flex-col items-start justify-start gap-2">
        <WorkingDay day="Sunday" />
        <hr className="w-full" />
        <WorkingDay day="Monday" />
        <hr className="w-full" />
        <WorkingDay day="Tuesday" />
        <hr className="w-full" />
        <WorkingDay day="Wednesday" />
        <hr className="w-full" />
        <WorkingDay day="Thursday" />
        <hr className="w-full" />
        <WorkingDay day="Friday" />
        <hr className="w-full" />
        <WorkingDay day="Saturday" />
      </form>
    </section>
  );
};

export default StepFive;

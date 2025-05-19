import WorkingDay from "./WorkingDay/WorkingDay";

const StepFive = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <form className="flex w-2/3 flex-col items-start justify-start gap-2">
        <h1 className="text-2xl">מתי אפשר לקבוע לך תורים?</h1>
        <p>אפשר לשנות את שעות הפעילות גם בהמשך, הפסקות ניתן להגדיר בקלות ביומן.</p>
        <WorkingDay day="Sunday" />
        <WorkingDay day="Monday" />
        <WorkingDay day="Tuesday" />
        <WorkingDay day="Wednesday" />
        <WorkingDay day="Thursday" />
        <WorkingDay day="Friday" />
        <WorkingDay day="Saturday" />
      </form>
    </section>
  );
};

export default StepFive;

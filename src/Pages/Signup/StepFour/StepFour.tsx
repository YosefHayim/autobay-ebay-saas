import { businessTypes } from "./businessArray";

const StepFour = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <form className="w-2/3">
        <h1>מה סוג העסק שלך?</h1>
        <p>בחר/י את סוג העסק שלך. ניתן לבחור עד 3 סוגי עסקים</p>
        <div className="grid h-80 grid-cols-2 gap-1 overflow-y-scroll">
          {businessTypes.map((typeOfB) => (
            <div key={typeOfB.value}>{typeOfB.icon}</div>
          ))}
        </div>
      </form>
    </section>
  );
};

export default StepFour;

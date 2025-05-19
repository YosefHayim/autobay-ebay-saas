import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";
import { howDidYouHearAboutUsOptions, whichCalendarYouHadOptions } from "./customerOptions";

const StepThree = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">קצת על העסק שלך</h1>
      <div className="flex gap-1">
        <p>כדי שנוכל לבנות</p>
        <SparklesText text="עמוד מדהים" />
        <p>לעסק שלך אנחנו צריכים כמה פרטים</p>
      </div>
      <form className="flex w-2/3 flex-col items-center gap-3">
        <div className="w-full">
          <Input placeholder="שם העסק"></Input>
        </div>
        <div className="w-full">
          <Input placeholder="מספר טלפון של העסק"></Input>
        </div>
        <div className="w-full">
          <Input placeholder="כתובת העסק"></Input>
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="previous-calendar-use" className="w-full">
            איזה יומן היה לך עד עכשיו?
          </label>
          <select name="previous-calendar-use" className="w-full rounded-sm border border-gray-300 p-2">
            {whichCalendarYouHadOptions.map((pickOption) => (
              <option key={pickOption.value} value={pickOption.value}>
                {pickOption.text}
              </option>
            ))}
          </select>
        </div>
        <hr className="w-full" />
        <div className="flex w-full flex-col">
          <label htmlFor="previous-calendar-use" className="w-full">
            איך שמעת עלינו?
          </label>
          <select name="previous-calendar-use" className="w-full rounded-sm border border-gray-300 p-2">
            {howDidYouHearAboutUsOptions.map((pickOption) => (
              <option key={pickOption.value} value={pickOption.value}>
                {pickOption.text}
              </option>
            ))}
          </select>
        </div>
        <hr className="w-full" />
      </form>
    </section>
  );
};

export default StepThree;

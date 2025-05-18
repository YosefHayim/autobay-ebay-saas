import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";
import { howDidYouHearAboutUsOptions, whichCalendarYouHadOptions } from "./customerOptions";

const StepThree = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1>קצת על העסק שלך</h1>
      <div className="flex gap-1">
        <p>כדי שנוכל לבנות</p>
        <SparklesText text="עמוד מדהים" />
        <p>לעסק שלך אנחנו צריכים כמה פרטים</p>
      </div>
      <form className="flex w-1/3 flex-col items-center justify-center gap-3">
        <div>
          <Input placeholder="שם העסק"></Input>
        </div>
        <div>
          <Input placeholder="מספר טלפון של העסק"></Input>
        </div>
        <div>
          <Input placeholder="כתובת העסק"></Input>
        </div>
        <div>
          <label htmlFor="previous-calendar-use" className="w-full">
            איזה יומן היה לך עד עכשיו?
          </label>
          <select name="previous-calendar-use" className="w-full">
            {whichCalendarYouHadOptions.map((pickOption) => (
              <option key={pickOption.value} value={pickOption.value}>
                {pickOption.text}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="previous-calendar-use" className="w-full">
            איך שמעת עלינו?
          </label>
          <select name="previous-calendar-use" className="w-full">
            {howDidYouHearAboutUsOptions.map((pickOption) => (
              <option key={pickOption.value} value={pickOption.value}>
                {pickOption.text}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default StepThree;

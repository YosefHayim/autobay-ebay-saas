import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";
import { howDidYouHearAboutUsOptions, whichCalendarYouHadOptions } from "./customerOptions";

const BasicInfoAboutBusiness = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">A little bit about your business</h1>
      <div className="flex gap-1">
        <p>So we can built you a</p>
        <SparklesText text="amazing website" />
        <p>to your business we need few more details</p>
      </div>
      <form className="flex w-2/3 flex-col items-center gap-3">
        <div className="w-full">
          <Input placeholder="Business name"></Input>
        </div>
        <div className="w-full">
          <Input placeholder="Phone number of the business"></Input>
        </div>
        <div className="w-full">
          <Input placeholder="Business address"></Input>
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="previous-calendar-use" className="w-full">
            What calendar you had until now?
          </label>
          <select name="previous-calendar-use" className="w-full rounded-sm border border-gray-300 p-2">
            {whichCalendarYouHadOptions?.map((pickOption) => (
              <option key={pickOption.value} value={pickOption.value}>
                {pickOption.text}
              </option>
            ))}
          </select>
        </div>
        <hr className="w-full" />
        <div className="flex w-full flex-col">
          <label htmlFor="previous-calendar-use" className="w-full">
            How did you hear about us?
          </label>
          <select name="previous-calendar-use" className="w-full rounded-sm border border-gray-300 p-2">
            {howDidYouHearAboutUsOptions?.map((pickOption) => (
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

export default BasicInfoAboutBusiness;

import { Input } from "@/components/ui/input";

const StepOne = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <form className="w-1/3">
        <h1>מה מספר הנייד שלך?</h1>
        <Input type="tel" id="phone" name="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="w-full" />
      </form>
    </section>
  );
};

export default StepOne;

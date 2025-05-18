import InputOTPAuth from "../InputOTPAuth/InputOTPAuth";

const StepTwo = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1>שלחנו לך הודעה עם קוד אימות</h1>
      <p>הזן את הקוד שקיבלת</p>
      <form dir="ltr">
        <InputOTPAuth />
      </form>
    </section>
  );
};

export default StepTwo;

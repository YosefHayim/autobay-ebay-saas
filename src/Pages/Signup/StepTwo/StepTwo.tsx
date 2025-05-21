import InputOTPAuth from "../InputOTPAuth/InputOTPAuth";

const StepTwo = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl">We have send you a verification code</h1>
      <p>Enter the code you received</p>
      <form>
        <InputOTPAuth />
      </form>
    </section>
  );
};

export default StepTwo;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stepper, StepperIndicator, StepperItem, StepperSeparator, StepperTrigger } from "@/components/ui/stepper";
import { useState } from "react";
import InputOTPAuth from "./InputOTPAuth/InputOTPAuth";

const steps = [1, 2, 3, 4];

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const stepSignUpProccess = () => {
    switch (currentStep) {
      case 1:
        return (
          <section className="justify flex w-full items-center justify-center">
            <form className="w-1/3">
              <Label htmlFor="phone-number">מה מספר הנייד שלך?</Label>
              <Input type="tel" id="phone" name="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="w-full" />
            </form>
          </section>
        );
        break;

      case 2:
        return (
          <section className="flex w-1/2 flex-col items-center justify-center gap-3">
            <h1>שלחנו לך הודעה עם קוד אימות</h1>
            <p>הזן את הקוד שקיבלת</p>
            <form dir="ltr">
              <InputOTPAuth />
            </form>
          </section>
        );
        break;

      case 3:
        <section></section>;
        break;

      case 4:
        <section></section>;
        break;

      default:
        return <section></section>;
    }
  };

  return (
    <div className="mx-auto h-100 max-w-xl min-w-[300px] space-y-8">
      <div>
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1" loading={isLoading}>
              <StepperTrigger asChild>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <div className="flex w-full flex-col items-center justify-center">{stepSignUpProccess()}</div>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="outline" className="w-32" onClick={() => setCurrentStep((prev) => prev - 1)} disabled={currentStep === 1}>
            חזור
          </Button>
          <Button variant="outline" className="w-32" onClick={handleNextStep} disabled={currentStep > steps.length}>
            המשך
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

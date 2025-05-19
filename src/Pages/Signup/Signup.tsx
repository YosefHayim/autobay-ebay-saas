"use client";

import { Button } from "@/components/ui/button";
import { Stepper, StepperIndicator, StepperItem, StepperSeparator, StepperTrigger } from "@/components/ui/stepper";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";
import { StepSix } from "./StepSix";

const steps = [1, 2, 3, 4, 5, 6];

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
        return <StepOne />;

      case 2:
        return <StepTwo />;

      case 3:
        return <StepThree />;

      case 4:
        return <StepFour />;

      case 5:
        return <StepFive />;

      case 6:
        return <StepSix />;

      default:
        return <></>;
    }
  };

  return (
    <div className="mx-auto my-8 max-w-xl min-w-[300px] space-y-8">
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

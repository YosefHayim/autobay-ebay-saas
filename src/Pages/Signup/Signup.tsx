"use client";
import { Button } from "@/components/ui/button";
import { Stepper, StepperIndicator, StepperItem, StepperSeparator, StepperTrigger } from "@/components/ui/stepper";
import { useStepperSignUp } from "@/hooks/use-stepper-signup";
import { stepSignUpProccess } from "@/hooks/use-signup-proccess";

const steps = [1, 2, 3, 4, 5, 6];

const Signup = () => {
  const { currentStep, setCurrentStep, isLoading, handleNextStep, handlePreviousStep } = useStepperSignUp(1, steps.length);

  return (
    <div className="mx-auto my-8 max-w-xl min-w-[300px] space-y-8">
      <div>
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps?.map((step) => (
            <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1" loading={isLoading}>
              <StepperTrigger asChild>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <div className="flex w-full flex-col items-center justify-center">{stepSignUpProccess(currentStep)}</div>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="outline" className="w-32" onClick={handlePreviousStep}>
            Back
          </Button>
          <Button variant="outline" className="w-32" onClick={handleNextStep} disabled={currentStep > steps.length}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

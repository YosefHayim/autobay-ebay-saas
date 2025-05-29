import { useState } from "react";

export const useStepperSignUp = (initialStep = 1, totalSteps = 6) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (currentStep >= totalSteps) return;
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const handlePreviousStep = () => {
    if (currentStep <= 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  return {
    currentStep,
    isLoading,
    setCurrentStep,
    handleNextStep,
    handlePreviousStep,
  };
};

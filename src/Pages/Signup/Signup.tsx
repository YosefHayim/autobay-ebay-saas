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
          <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
            <form className="w-1/3">
              <h1>מה מספר הנייד שלך?</h1>
              <Input type="tel" id="phone" name="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="w-full" />
            </form>
          </section>
        );

      case 2:
        return (
          <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
            <h1>שלחנו לך הודעה עם קוד אימות</h1>
            <p>הזן את הקוד שקיבלת</p>
            <form dir="ltr">
              <InputOTPAuth />
            </form>
          </section>
        );

      case 3:
        return (
          <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
            <h1>קצת על העסק שלך</h1>
            <p>כדי שנוכל לבנות עמוד מדהים לעסק שלך אנחנו צריכים כמה פרטים</p>
            <form className="w-1/3">
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
                  <option value="">בחר יומן</option>
                  <option value="physical-calendar">יומן פיזי</option>
                  <option value="google-calendar">יומן גוגל</option>
                  <option value="other-calendar">מערכת אחרת</option>
                  <option value="none">אין לי יומן</option>
                </select>
              </div>
              <div>
                <label htmlFor="previous-calendar-use" className="w-full">
                  איך שמעת עלינו?
                </label>
                <select name="previous-calendar-use" className="w-full">
                  <option value="internet-commercial">פרסומת באינטרנט</option>
                  <option value="google-commercial">פרסומת בגוגל</option>
                  <option value="facebook-commercial">פרסומת בפייסבוק</option>
                  <option value="google-search">חיפוש בגוגל</option>
                  <option value="recommendation-receive">קיבלתי המלצה </option>
                  <option value="appstore-search">חיפוש בחנות אפליקציות</option>
                  <option value="other business">ראיתי בעסק אחר</option>
                </select>
              </div>
            </form>
          </section>
        );

      case 4:
        return (
          <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
            <form className="w-1/3">
              <h1>מה סוג העסק שלך?</h1>
              <p>בחר/י את סוג העסק שלך. ניתן לבחור עד 3 סוגי עסקים</p>
            </form>
          </section>
        );
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

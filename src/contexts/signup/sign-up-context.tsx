import { useState, type ReactNode } from "react";
import type { SignUpDataProps } from "./types";
import { SignUpContext } from "@/hooks/use-signup";

const initialSignUpData: SignUpDataProps = {
  phone: "",
  otp: "",
  prevCalendarUse: "",
  howDidYouHearOfUs: "",
  businessTypes: [],
  activityHours: {
    sunday: { from: "", until: "" },
    monday: { from: "", until: "" },
    tuesday: { from: "", until: "" },
    wednesday: { from: "", until: "" },
    thursday: { from: "", until: "" },
    friday: { from: "", until: "" },
    saturday: { from: "", until: "" },
  },
  services: [],
};

export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [signUpData, setSignUpData] = useState<SignUpDataProps>(initialSignUpData);

  return <SignUpContext.Provider value={{ signUpData, setSignUpData }}>{children}</SignUpContext.Provider>;
};

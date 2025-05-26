import { createContext, useState, type ReactNode } from "react";
import type { SignUpDataProps, SignUpContextType } from "./types";

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

export const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [signUpData, setSignUpData] = useState<SignUpDataProps>(initialSignUpData);

  return <SignUpContext.Provider value={{ signUpData, setSignUpData }}>{children}</SignUpContext.Provider>;
};

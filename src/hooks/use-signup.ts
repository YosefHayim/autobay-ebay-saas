import type { SignUpContextType } from "@/contexts/signup/types";
import { createContext, useContext } from "react";

export const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) throw new Error("useSignUpContext must be used within SignUpProvider");
  return context;
};

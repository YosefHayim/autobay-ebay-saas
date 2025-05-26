import { SignUpContext } from "@/contexts/SignupContext/SignupContext";
import { useContext } from "react";

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) throw new Error("useSignUpContext must be used within SignUpProvider");
  return context;
};

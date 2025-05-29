import type { ReactNode } from "react";
import { Toggle } from "../ui/toggle";

const CustomToggleButton: React.FC<{
  children: ReactNode;
  ariaLabelText: string;
  className: string;
  onPressedChange: (pressed: boolean) => void;
  withoutClass: boolean;
  variant: "default" | "outline";
}> = ({ children, ariaLabelText, className, onPressedChange, withoutClass, variant }) => {
  return (
    <Toggle aria-label={ariaLabelText} onPressedChange={onPressedChange} variant={variant} className={`${withoutClass ? "w-min" : className}`}>
      {children}
    </Toggle>
  );
};

export default CustomToggleButton;

import CustomToggleButton from "@/components/CustomToggleButton/CustomToggleButton";
import { Lock, LockOpen } from "lucide-react";
import { useState } from "react";

const ToggleOpenCloseButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <CustomToggleButton
      withoutClass={false}
      ariaLabelText={`Switch to ${isOpen === true ? true : false} mode`}
      variant="outline"
      className={`group data-[state=on]:hover:bg-muted data-[state=on]:bg-transparent`}
      onPressedChange={(pressed: boolean) => {
        if (pressed && isOpen === true) setOpen(false);
        else setOpen(true);
      }}
    >
      <LockOpen
        size={30}
        strokeWidth={2}
        className="absolute w-min shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
      <Lock
        size={30}
        strokeWidth={2}
        className="w-min shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
    </CustomToggleButton>
  );
};

export default ToggleOpenCloseButton;

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { CustomToggleButton } from "../CustomToggleButton";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <CustomToggleButton
      ariaLabelText={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      variant="outline"
      withoutClass={false}
      className={`group data-[state=on]:hover:bg-muted data-[state=on]:bg-transparent" size-9 w-min p-[1.5em]`}
      onPressedChange={(pressed) => {
        if (pressed && theme === "light") setTheme("dark");
        else setTheme("light");
      }}
    >
      <Sun
        size={16}
        strokeWidth={2}
        className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
      <Moon
        size={16}
        strokeWidth={2}
        className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
    </CustomToggleButton>
  );
};

export default ToggleThemeButton;

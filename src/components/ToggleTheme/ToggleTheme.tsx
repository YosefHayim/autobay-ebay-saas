"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const ToggleTheme = ({ withoutClass = false }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      variant="outline"
      className={withoutClass ? "" : `group data-[state=on]:hover:bg-muted data-[state=on]:bg-transparent" size-9 p-[1.5em]`}
      onPressedChange={(pressed) => {
        if (pressed && theme === "light") setTheme("dark");
        else setTheme("light");
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
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
    </Toggle>
  );
};

export default ToggleTheme;

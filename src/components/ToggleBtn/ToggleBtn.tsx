"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const ToggleBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Toggle
        variant="outline"
        className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
        onPressedChange={(pressed) => {
          if (pressed) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
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
    </div>
  );
};

export default ToggleBtn;

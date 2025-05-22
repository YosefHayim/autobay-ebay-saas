"use client";

import { CalendarRange, Columns, Grid2X2, Grid3X3, LayoutList, List, Plus } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { buttonHover, slideFromLeft, slideFromRight, transition } from "../animations";

import { UserSelect } from "./user-select";
import { TodayButton } from "./today-button";
import { DateNavigator } from "./date-navigator";
import { AddEditEventDialog } from "../dialogs/add-edit-event-dialog";

import { ButtonGroup } from "@/components/ui/button-group";
import { useCalendar } from "../contexts/calendar-context";
import { Toggle } from "@/components/ui/toggle";
import { Settings } from "../settings/settings";
import FilterEvents from "./filter";
import { useFilteredEvents } from "@/hooks/useFilteredEvents";

export const MotionButton = motion.create(Button);

export function CalendarHeader() {
  const { view, setView } = useCalendar();

  const events = useFilteredEvents();

  return (
    <div className="flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between">
      <motion.div className="flex items-center gap-3" variants={slideFromLeft} initial="initial" animate="animate" transition={transition}>
        <TodayButton />
        <DateNavigator view={view} events={events} />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-1.5"
        variants={slideFromRight}
        initial="initial"
        animate="animate"
        transition={transition}
      >
        <div className="options flex flex-wrap items-center gap-4 md:gap-2">
          <FilterEvents />
          <MotionButton variant="outline" onClick={() => setView("agenda")} asChild variants={buttonHover} whileHover="hover" whileTap="tap">
            <Toggle className="relative">
              {view === "agenda" ? (
                <>
                  <CalendarRange />
                  <span className="absolute -top-1 -right-1 size-3 rounded-full bg-green-400"></span>
                </>
              ) : (
                <LayoutList />
              )}
            </Toggle>
          </MotionButton>
          <ButtonGroup className="flex">
            <MotionButton
              variant={view === "day" ? "default" : "outline"}
              aria-label="View by day"
              onClick={() => {
                setView("day");
              }}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <List className="h-4 w-4" />
            </MotionButton>

            <MotionButton
              variant={view === "week" ? "default" : "outline"}
              aria-label="View by week"
              onClick={() => setView("week")}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Columns className="h-4 w-4" />
            </MotionButton>

            <MotionButton
              variant={view === "month" ? "default" : "outline"}
              aria-label="View by month"
              onClick={() => setView("month")}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Grid3X3 className="h-4 w-4" />
            </MotionButton>
            <MotionButton
              variant={view === "year" ? "default" : "outline"}
              aria-label="View by year"
              onClick={() => setView("year")}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Grid2X2 className="h-4 w-4" />
            </MotionButton>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-1.5">
          <UserSelect />

          <AddEditEventDialog>
            <MotionButton variants={buttonHover} whileHover="hover" whileTap="tap">
              Add Event
              <Plus className="h-4 w-4" />
            </MotionButton>
          </AddEditEventDialog>
        </div>
        <Settings />
      </motion.div>
    </div>
  );
}

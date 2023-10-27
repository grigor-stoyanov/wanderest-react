import { Calendar } from "react-calendar";
import type { Value } from "../../../../../node_modules/react-calendar/dist/esm/shared/types";
import { useSelectFilter } from "../../../../db/slices/filterSlice";
import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import PopUp from "../../../ui/PopUp";
import classes from "./DateRangeCalendar.module.css";

const DateRangeCalendar = () => {
  const today = new Date();
  const dispatch = useDispatch();

  const [value, setValue] = useState<any>(null);
  const changeHandler = (date: Value) => {
    setValue(date);
  };
  return (
    <PopUp id="filterPopups" classes={classes.popup}>
      <Calendar
        showNeighboringMonth={true}
        defaultActiveStartDate={today}
        minDate={today}
        selectRange={true}
        value={value}
        onChange={changeHandler}
        showDoubleView={true}
      />
    </PopUp>
  );
};

export default DateRangeCalendar;

import { Calendar } from "react-calendar";
import type { Value } from "../../../../types/react-calendar-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PopUp from "../../../ui/PopUp";
import classes from "./DateRangeCalendar.module.css";
import { Await } from "react-router-dom";

const DateRangeCalendar = () => {
  const today = new Date();
  const dispatch = useDispatch();
  const [value, setValue] = useState<Value>();
  const [activeValue, setActiveValue] = useState<Value>();

  const changeHandler = (date: Value) => {
    setValue(date);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <PopUp id="filterPopups" classes={classes.popup}>

      <Calendar
        defaultActiveStartDate={today}
        minDate={today}
        selectRange={true}
        value={value}
        onActiveStartDateChange={(date) => console.log(date)}
        onChange={changeHandler}
        showDoubleView={true}
      ></Calendar>
    </PopUp>
  );
};

export default DateRangeCalendar;

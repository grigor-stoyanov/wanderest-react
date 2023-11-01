import { Calendar } from "react-calendar";
import type { OnArgs, Value } from "../../../../types/react-calendar-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PopUp from "../../../ui/PopUp";
import classes from "./DateRangeCalendar.module.css";
import { changeValue, focusInput } from "../../../../db/slices/filterSlice";

const DateRangeCalendar = (props: { inFocus?: string }) => {
  const today = new Date();
  const dispatch = useDispatch();
  const [value, setValue] = useState<Value>();
  const [activeValue, setActiveValue] = useState<OnArgs>();
  const nextFocus = {
    checkin: "checkout",
    checkout: "checkin",
  };
  useEffect(() => {
    
    if(activeValue===undefined){
      return
    }

    if (props.inFocus) {
      dispatch(
        changeValue({
          filter: props.inFocus,
          value: Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(activeValue?.value as Date),
        })
      );
          
      dispatch(
        focusInput({
          filter: nextFocus[props.inFocus as keyof typeof nextFocus],
        })
      );
    }
  }, [activeValue]);

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    dispatch(
      changeValue({
        filter: "checkin",
        value: Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format((value! as Array<Date>)[0]),
      })
    );
    dispatch(
      changeValue({
        filter: "checkout",
        value: Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format((value! as Array<Date>)[1]),
      })
    );
  }, [value]);

  return (
    <PopUp id="filterPopups" classes={classes.popup}>
      <Calendar
        defaultActiveStartDate={today}
        minDate={today}
        selectRange={true}
        value={value}
        onActiveStartDateChange={(date) => setActiveValue(date)}
        onChange={(dateRange) => setValue(dateRange)}
        showDoubleView={true}
      ></Calendar>
    </PopUp>
  );
};

export default DateRangeCalendar;

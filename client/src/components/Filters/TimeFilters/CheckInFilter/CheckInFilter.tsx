import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import {
  changeValue,
  focusInput,
  useSelectFilter,
} from "../../../../db/slices/filterSlice";
import classes from "./CheckInFilter.module.css";

const CheckInFilter = () => {
  const checkinFilter = useSelectFilter("checkin");
  const dispatch = useDispatch();
  const classNames = [classes.checkin];
  return (
    <div
      className={
        checkinFilter.isFocused
          ? [...classNames, classes.focused].join(" ")
          : classNames.join(" ")
      }
    >
      <label htmlFor="checkin">Check In ?</label>
      <input
        value={checkinFilter.value!}
        onChange={(e) => {
          dispatch(
            changeValue({
              filter: "checkin",
              value: e.currentTarget.value,
            })
          );
        }}
        readOnly={true}
        id="checkin"
        onFocus={() => dispatch(focusInput({ filter: "checkin" }))}
        type="text"
      />
    </div>
  );
};

export default CheckInFilter;

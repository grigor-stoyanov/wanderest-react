import { useDispatch } from "react-redux";
import {
  changeValue,
  focusInput,
  useSelectFilter,
} from "../../../../db/slices/filterSlice";
import classes from "./CheckOutFilter.module.css";
import DateRangeCalendar from "../DateRangeCalendar/DateRangeCalendar";

const CheckOutFilter = () => {
  const checkoutFilter = useSelectFilter("checkout");
  const dispatch = useDispatch();
  const classNames = [classes.checkout];
  return (
    <div
      className={
        checkoutFilter.isFocused
          ? [...classNames, classes.focused].join(" ")
          : classNames.join(" ")
      }
    >
      <label htmlFor="checkout">Check Out?</label>
      <input
        defaultValue={checkoutFilter.value!}
        onChange={(e) => {
          dispatch(
            changeValue({
              filter: "checkout",
              value: e.currentTarget.value,
            })
          );
        }}
        id="checkout"
        onFocus={() => dispatch(focusInput({ filter: "checkout" }))}
        type="text"
      />
      {checkoutFilter.isFocused && <DateRangeCalendar />}
    </div>
  );
};

export default CheckOutFilter;

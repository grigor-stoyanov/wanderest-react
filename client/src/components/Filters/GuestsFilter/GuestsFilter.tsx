import { useDispatch } from "react-redux";
import classes from "./Guets.module.css";
import {
  changeValue,
  focusInput,
  useSelectFilter,
} from "../../../db/slices/filterSlice";

const GuestsFilter = () => {
  const guestsFilter = useSelectFilter("guests");
  const dispatch = useDispatch();
  const classNames = [classes.guests];
  return (
    <div
      className={
        guestsFilter.isFocused
          ? [...classNames, classes.focused].join(" ")
          : classNames.join(" ")
      }
    >
      <label htmlFor="guests">Guests?</label>
      <input
        id="guests"
        onFocus={() => dispatch(focusInput({ filter: "guests" }))}
        type="text"
        value={guestsFilter.value!}
        onChange={(e) => {
          let number = e.currentTarget.value.replace(/[^0-9]/g, '');
          dispatch(
            changeValue({
              filter: "guests",
              value:number,
            })
          );
        }}
        placeholder="How many?"
        inputMode="numeric"
      />
    </div>
  );
};

export default GuestsFilter;

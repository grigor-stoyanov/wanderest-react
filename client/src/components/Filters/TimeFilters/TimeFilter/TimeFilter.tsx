import { useSelectFilter } from "../../../../db/slices/filterSlice";
import CheckInFilter from "../CheckInFilter/CheckInFilter";
import CheckOutFilter from "../CheckOutFilter/CheckOutFilter";
import DateRangeCalendar from "../DateRangeCalendar/DateRangeCalendar";

const TimeFilter = () => {
  const checkinFilter = useSelectFilter("checkin");

  const checkoutFilter = useSelectFilter("checkout");
  return (
    <>
      <CheckInFilter />
      <CheckOutFilter />

      {(checkinFilter.isFocused || checkoutFilter.isFocused) && (
        <DateRangeCalendar
          inFocus={checkinFilter.isFocused ? "checkin" : "checkout"}
        />
      )}
    </>
  );
};

export default TimeFilter;

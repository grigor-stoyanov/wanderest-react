import { AnimatePresence, motion } from "framer-motion";
import classes from "./Filters.module.css";
import { useEffect, useRef } from "react";
import LocationFilter from "./LocationFilter/LocationFilter";
import GuestsFilter from "./GuestsFilter/GuestsFilter";
import CheckInFilter from "./TimeFilters/CheckInFilter/CheckInFilter";
import CheckOutFilter from "./TimeFilters/CheckOutFilter/CheckOutFilter";
import { useDispatch } from "react-redux";
import { clearFocus, focusInput } from "../../db/slices/filterSlice";
import useGlobalClick from "../../hooks/global-click-hook";
import useGlobalScroll from "../../hooks/global-scroll-hook";
import PopUp from "../ui/PopUp";

const Filters: React.FC<{ headerRef: React.RefObject<HTMLElement>}> = (
  props
) => {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { clickedOutside: toHide, resetClickedOutsideState: resetToHide } =
    useGlobalClick([buttonsRef], props.headerRef);
  const [isScrolled] = useGlobalScroll();

  const dispatch = useDispatch();

  const filterClickHandler = (filterName: string) => () => {
    dispatch(focusInput({ filter: filterName }));
  };
  useEffect(() => {
    if (isScrolled === null) {
      dispatch(clearFocus());
    } else if (isScrolled) {
      resetToHide();
    }
  }, [isScrolled]);

  return (
    <div className={classes.filters} style={toHide ? { height: 0 } : {}}>
      <AnimatePresence>
        {toHide && (
          <motion.div className={classes.filterButtons} ref={buttonsRef}>
            <button onClick={filterClickHandler("location")}>Where?</button>
            <button onClick={filterClickHandler("checkin")}>When?</button>
            <button onClick={filterClickHandler("guests")}>
              Add Guests <i className="bi bi-search" />
            </button>
          </motion.div>
        )}
        { !toHide  && ( 
          <PopUp classes={classes.popup} id="filterInputs">
            <motion.div
              className={classes.filterControls}
              animate={{ height: "100%", opacity: 1, x: 0, y: 0 }}
              initial={{ opacity: 0, height: 0, x: -80, y: -70 }}
              exit={{ opacity: 0, height: 0, x: -80, y: -70 }}
              transition={{ type: "spring" }}
            >
              <div className={classes.filterInputs}>
                <LocationFilter />
                <CheckInFilter />
                <CheckOutFilter />
                <GuestsFilter />
              </div>
            </motion.div>
          </PopUp>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;

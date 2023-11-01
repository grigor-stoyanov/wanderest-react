import { useDispatch } from "react-redux";
import classes from "./Guets.module.css";
import {
  addGuest,
  changeValue,
  focusInput,
  guestFilter,
  removeGuest,
  useSelectFilter,
} from "../../../db/slices/filterSlice";
import PopUp from "../../ui/PopUp";
import { Link } from "react-router-dom";

const GUEST_TYPES = [
  { type: "Adults", description: "Age 16 and above" },
  { type: "Children", description: "Age 15 and below" },
  {
    type: "Pets",
    description: "View our policy on pets",
    linkAddress: "pets-policy",
  },
];

const GuestsFilter = () => {
  const guestsFilter = useSelectFilter("guests");
  const dispatch = useDispatch();
  const classNames = [classes.guests];

  const addGuestsHandler = (type: string) => {
    dispatch(addGuest({ type }));
  };
  const removeGuestHandler = (type: string) => {
    dispatch(removeGuest({ type }));
  };

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
        placeholder="How many?"
        readOnly={true}
        value={Object.values((guestsFilter.value!)).reduce((acc,v)=>acc+v,0)}
      />
      {guestsFilter.isFocused && (
        <PopUp classes={classes.popup} id="filterPopups">
          <ul role="list" className={classes.guestsList}>
            {GUEST_TYPES.map((type) => (
              <li className={classes.guestsItem}>
                <div className={classes.guestType}>
                  <h5>{type.type}:</h5>
                  <span>
                    {type.linkAddress ? (
                      <Link to={`/${type.linkAddress}`}>
                        {type.description}
                      </Link>
                    ) : (
                      type.description
                    )}
                  </span>
                </div>
                <div className={classes.guestsNumber}>
                  <button
                    type="button"
                    disabled={
                      guestsFilter!.value![
                        type.type.toLowerCase() as keyof typeof guestsFilter.value
                      ] <= 0
                    }
                    onClick={removeGuestHandler.bind(null, type.type.toLowerCase())}
                  >
                    <i className="bi bi-dash-circle"></i>
                  </button>
                  <span>
                    {
                      guestsFilter!.value![
                        type.type.toLowerCase() as keyof typeof guestsFilter.value
                      ]
                    }
                  </span>
                  <button
                    onClick={addGuestsHandler.bind(null, type.type.toLowerCase())}
                    type="button"
                  >
                    <i className="bi bi-plus-circle"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </PopUp>
      )}
    </div>
  );
};

export default GuestsFilter;

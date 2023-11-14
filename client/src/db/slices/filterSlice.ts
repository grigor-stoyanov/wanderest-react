import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const initialState = {
  location: {
    isFocused: false,
    value: "",
  },
  checkin: {
    isFocused: false,
    value: "",
  },
  checkout: {
    isFocused: false,
    value: "",
  },
  guests: {
    isFocused: false,
    value: {
      adults: 0,
      children: 0,
      pets: 0,
    },
  },
};

type filterState = typeof initialState;
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    focusInput: (state, action) => {
      const { filter } = action.payload;
      Object.keys(state).forEach((key) => {
        state[key as keyof filterState].isFocused = false;
      });
      state[filter as keyof filterState].isFocused = true;
    },
    clearFocus: (state) => {
      Object.keys(state).forEach((key) => {
        state[key as keyof filterState].isFocused = false;
      });
    },
    changeValue: (state, action) => {
      const { filter, value } = action.payload;
      state[filter as keyof filterState].value = value;
    },
    resetState: (state) => {
      return initialState;
    },
    addGuest: (state, action) => {
      const { type } = action.payload;
      state.guests.value[type as keyof typeof state.guests.value] += 1;
    },
    removeGuest: (state, action) => {
      const { type } = action.payload;
      state.guests.value[type as keyof typeof state.guests.value] -= 1;
    },
  },
});

const {
  focusInput,
  clearFocus,
  changeValue,
  resetState,
  addGuest,
  removeGuest,
} = filterSlice.actions;
const useSelectFilter = (filterName: string) => {
  const filter = useSelector(
    (state: RootState) => state.filter[filterName as keyof filterState]
  );
  return filter;
};
export default filterSlice;
export {
  focusInput,
  clearFocus,
  changeValue,
  resetState,
  addGuest,
  removeGuest,
  useSelectFilter,
};
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
    value: null,
  },
  checkout: {
    isFocused: false,
    value: null,
  },
  guests: {
    isFocused: false,
    value: 0,
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
  },
});

const { focusInput, clearFocus,changeValue } = filterSlice.actions;
const useSelectFilter = (filterName: string) => {
  const filter = useSelector(
    (state: RootState) => state.filter[filterName as keyof filterState]
  );
  return filter;
};
export default filterSlice;
export { focusInput, clearFocus,changeValue, useSelectFilter };

import { createSlice } from "@reduxjs/toolkit";

const passengerInfoSlice = createSlice({
  name: "passengerInfo",
  initialState: null,
  reducers: {
    addPassenger: (state, action) => action.payload,
  },
});

export const { addPassenger } = passengerInfoSlice.actions;
export default passengerInfoSlice.reducer;

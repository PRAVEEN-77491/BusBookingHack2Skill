import { createSlice } from "@reduxjs/toolkit";

const seatSelectionSlice = createSlice({
  name: "seatSelection",
  initialState: null,
  reducers: {
    addSeats: (state, action) => action.payload,
  },
});

export const { addSeats } = seatSelectionSlice.actions;
export default seatSelectionSlice.reducer;

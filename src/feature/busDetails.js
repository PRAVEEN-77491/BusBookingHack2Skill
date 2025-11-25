import { createSlice } from "@reduxjs/toolkit";

const busDetailsSlice = createSlice({
  name: "busDetails",
  initialState: null,
  reducers: {
    addBusDetail: (state, action) => action.payload,
  },
});

export const { addBusDetail } = busDetailsSlice.actions;
export default busDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: null,
  reducers: {
    addSearchData: (state, action) => action.payload,
  },
});

export const { addSearchData } = searchSlice.actions;
export default searchSlice.reducer;

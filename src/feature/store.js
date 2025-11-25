import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import seatSelectionReducer from "./seatSelection";
import busDetailsReducer from "./busDetails";
import passengerInfoReducer from "./passengerInfo";

const store = configureStore({
  reducer: {
    search: searchReducer,
    seatSelection: seatSelectionReducer,
    addBusDetail: busDetailsReducer,
    passengerInfo: passengerInfoReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import value from "./reducers/value";
import userDetails from "./reducers/user";

let store = configureStore({
  reducer: {
    value: value,
    userDetails: userDetails,
  },
});

export default store;

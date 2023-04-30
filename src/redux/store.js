import { configureStore } from "@reduxjs/toolkit";
import value from "./reducers/value";

let store = configureStore({
  reducer: {
    value: value,
  },
});

export default store;

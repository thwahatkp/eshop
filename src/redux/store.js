import { configureStore } from "@reduxjs/toolkit";
import layout from "./reducers/layout";

const store = configureStore({
  reducer: {
    layout: layout,
  },
});

export default store;

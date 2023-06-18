import { configureStore } from "@reduxjs/toolkit";
import layout from "./reducers/layout";
import user from "./reducers/user";

const store = configureStore({
  reducer: {
    layout: layout,
    user: user,
  },
});

export default store;

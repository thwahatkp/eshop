import { configureStore } from "@reduxjs/toolkit";
import layout from "./reducers/layout";
import user from "./reducers/user";
import menus from "./reducers/menus";
import slider from "./reducers/slider";

const store = configureStore({
  reducer: {
    layout,
    user,
    menus,
    slider,
  },
});

export default store;

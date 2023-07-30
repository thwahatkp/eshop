import { configureStore } from "@reduxjs/toolkit";
import layout from "./reducers/layout";
import user from "./reducers/user";
import menus from "./reducers/menus";

const store = configureStore({
  reducer: {
    layout: layout,
    user: user,
    menus: menus,
  },
});

export default store;

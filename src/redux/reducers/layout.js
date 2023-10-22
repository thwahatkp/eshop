import { createSlice } from "@reduxjs/toolkit";

const layout = createSlice({
  name: "layout",
  initialState: {
    value: 1,
    sidebar: false,
    category: true,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  reducers: {
    sidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    width: (state, action) => {
      state.width = action.payload;
    },
    height: (state, action) => {
      state.height = action.payload;
    },
    category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { sidebar, width, height, category } = layout.actions;
export default layout.reducer;

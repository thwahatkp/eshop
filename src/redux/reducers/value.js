import { createSlice } from "@reduxjs/toolkit";

let valueReducer = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    increment: (state, { payload }) => state + 1,
    decrement: (state, { payload }) => state - 1,
  },
});

export const { increment, decrement } = valueReducer.actions;
export default valueReducer.reducer;

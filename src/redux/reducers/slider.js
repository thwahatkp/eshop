import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getSlider = createAsyncThunk("slider card", () =>
  axios
    .get("slider")
    .then((res) => res.data.data)
    .catch((err) => err.response.data)
);

const slider = createSlice({
  name: "slider",
  initialState: {
    loading: false,
    data: [{}, {}, {}, {}, {}],
    error: "",
  },
  extraReducers: {
    [getSlider.pending]: (state) => {
      state.loading = true;
    },
    [getSlider.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getSlider.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.loading = false;
    },
  },
});

export default slider.reducer;
export { getSlider };

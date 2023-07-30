import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk("category menu", () =>
  axios
    .get("menu/category")
    .then((res) => res.data)
    .catch((err) => err.response.data)
);

const menus = createSlice({
  name: "menu",
  initialState: {
    category: {
      loading: false,
      data: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      error: "",
    },
  },
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.category.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.category.data = action.payload.data;
      state.category.loading = false;
    },
    [getCategories.rejected]: (state, action) => {
      state.category.error = action.payload.message;
      state.category.loading = false;
    },
  },
});

export default menus.reducer;
export { getCategories };

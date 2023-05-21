import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/";

let getLoggedDetails = createAsyncThunk("login details", () =>
  axios
    .get(API_URL)
    .then((res) => res.data || JSON.parse(localStorage.getItem("details")))
    .catch((err) => console.log(err))
);
let userDetails = createSlice({
  name: "userDetails",
  initialState: {
    name: "",
    fname: "",
    lname: "",
    username: "",
    mobile: "",
    email: "",
  },
  reducers: {},
  extraReducers: {
    [getLoggedDetails.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { login } = userDetails.actions;
export { getLoggedDetails };
export default userDetails.reducer;

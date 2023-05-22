import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/";

let getLoggedDetails = createAsyncThunk(
  "login details",
  (navigate) =>
    axios
      .get(API_URL)
      .then((res) => res.data || JSON.parse(localStorage.getItem("details")))
  // .catch((err) => {
  //   //   navigate("/login");
  //   // console.log(err);
  //   return err.response.data;
  // })
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
    logged: JSON.parse(localStorage.getItem("details")) ? true : false,
  },
  reducers: {
    logout: (state, action) => {
      state.logged = false;
    },
  },
  extraReducers: {
    [getLoggedDetails.fulfilled]: (state, action) => {
      action.payload.logged = true;
      return (state = action.payload);
    },
    // [getLoggedDetails.pending]: (state, action) => {
    //   state.logged = false;
    // },
    [getLoggedDetails.rejected]: (state, action) => {
      localStorage.removeItem("details");
      return (state = { logged: false });
      // state = false;
    },
  },
});

export const { logout } = userDetails.actions;
export { getLoggedDetails };
export default userDetails.reducer;

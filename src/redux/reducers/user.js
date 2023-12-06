import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { post } from "../../helper/axiosHelper";
import Cookies from "js-cookie";
import { handleLogout } from "../../common/functions/logout";

const getLoggedDetails = createAsyncThunk(
  "login details",
  () =>
    // (navigate) =>
    axios.get(import.meta.env.VITE_API_URL_CYCLIC).then((res) => res.data || JSON.parse(localStorage.getItem("details")))
  // .catch((err) => {
  //   //   navigate("/login");
  //   // console.log(err);
  //   return err.response.data;
  // })
);

const generateAccessToken = createAsyncThunk("accessToken", (data, thunk) => {
  const refreshToken = Cookies.get("_token") || sessionStorage.getItem("_token");
  post("/refreshToken", { refreshToken })
    .then((res) => {
      // const accessToken = res.accessToken;
      // console.log(accessToken);
    })
    .catch((err) => {
      // thunk.dispatch(logout());
      handleLogout(thunk.dispatch);
    });
});

let userDetails = createSlice({
  name: "userDetails",
  initialState: {
    name: "",
    fname: "",
    lname: "",
    username: "",
    mobile: "",
    email: "",
    logged: Cookies.get("_token") || sessionStorage.getItem("_token") ? true : false,
  },
  reducers: {
    logout: (state, action) => {
      // <<======= Delete all another user value =======>>
      Object.keys(state).forEach((key) => {
        delete state[key];
        // state[key] = ""
      });
      state.logged = false;
      localStorage.removeItem("details");
      sessionStorage.removeItem("_token");
      Cookies.remove("_token");
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
export { getLoggedDetails, generateAccessToken };
export default userDetails.reducer;

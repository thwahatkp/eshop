import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {  post } from "../../helper/axiosHelper";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLoggedDetails } from "../../redux/reducers/user";

function Signup() {
  // <<======= Actions =======>>
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // <<======= State =======>>
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({});
  const [error, setError] = useState({});

  // <<======= Functions =======>>
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setDetails((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    post(`register`, details)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          localStorage.setItem("details", JSON.stringify(res.data));
          dispatch(getLoggedDetails());
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.code === 409) {
          setError({ exists: err.data.exists, message: err.message });
        }
      });
  };
  return (
    <div className="h-full max-w-xl md:max-w-5xl mx-auto bg-background rounded-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] my-12 p-8 w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 bg-purple-200 relative">
        <img src="/signup1.jpg" alt="" className="md:absolute inset-0 w-full h-full object-cover object-center" />
      </div>
      <div className="h-auto flex flex-col p-8 w-full md:w-3/5 my-auto ">
        <h1 className="ml-3 text-center md:text-left text-3xl font-semibold mb-4">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 flex-col md:flex-row">
            <TextField
              // fullWidth
              className="w-full rounded-full"
              sx={{ mb: 2 }}
              // error={true}
              id="outlined-error-helper-text"
              label="Firstname"
              name="firstname"
              size="small"
              onChange={handleChange}

              //   defaultValue="Hello World"
              // helperText={true && "no account exists"}
            />
            <TextField
              // fullWidth
              className="w-full"
              sx={{ mb: 2 }}
              // error={true}
              id="outlined-error-helper-text"
              label="Lastname"
              name="lastname"
              size="small"
              onChange={handleChange}

              //   defaultValue="Hello World"
              // helperText={true && "no account exists"}
            />
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            <TextField
              // fullWidth
              className="w-full"
              sx={{ mb: 2 }}
              error={error.exists === "username"}
              id="outlined-error-helper-text"
              label="Username"
              name="username"
              size="small"
              onChange={handleChange}
              //   defaultValue="Hello World"
              helperText={error?.exists === "username" && error?.message}
            />
            <TextField
              label="Password"
              style={{ border: "none" }}
              sx={{ mt: -0, mb: 2 }}
              type={showPassword ? "text" : "password"}
              // value={password}
              // error={true}
              fullWidth
              name="password"
              size="small"
              onChange={handleChange}
              margin="normal"
              // helperText={true && "Incorrect password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <TextField
              // fullWidth
              className="w-full"
              sx={{ mb: 2 }}
              error={error.exists === "mobile"}
              id="outlined-error-helper-text"
              label="Mobile"
              name="mobile"
              size="small"
              onChange={handleChange}
              type="number"
              //   defaultValue="Hello World"
              helperText={error?.exists === "mobile" && error?.message}
            />
            <TextField
              // fullWidth
              className="w-full"
              sx={{ mb: 2 }}
              error={error.exists === "email"}
              onChange={handleChange}
              id="outlined-error-helper-text"
              label="Email"
              name="email"
              size="small"
              type="email"
              //   defaultValue="Hello World"
              helperText={error?.exists === "email" && error?.message}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white  bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Signup
          </button>
        </form>
        <span className="text-center text-base">
          Already a member?{" "}
          <Link className="hover:text-blue-800 hover:underline" to="/login">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;

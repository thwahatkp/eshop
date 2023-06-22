import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { post } from "../../helper/axiosHelper";
import { getLoggedDetails } from "../../redux/reducers/user";

function Login() {
  // <<======= Actions =======>>
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // <<======= State =======>>
  const [details, setDetails] = useState({});
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // <<======= Functions =======>>
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  let handleChange = (e) => {
    setError("");
    let { name, type, value, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;
    setDetails({ ...details, [name]: newValue });
  };

  let handleSubmit = (e, data) => {
    e.preventDefault();
    post(`login`, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("details", JSON.stringify(res.data));
          data.rememberMe
            ? localStorage.setItem("rememberMe", true)
            : localStorage.removeItem("rememberMe");
          dispatch(getLoggedDetails());
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.status >= 400  ) {
          setError(err.message);
        }
      });
  };

  const google = () => {
    window.open(`${import.meta.env.VITE_API_URL}auth/google`, "_self");
  };

  return (
    <div className="h-full max-w-md md:max-w-xl mx-auto bg-background rounded-lg shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] my-12 p-8 w-full">
      <h1 className="text-center text-3xl font-semibold mb-2">Login</h1>
      <div className="h-auto flex flex-col p-8">
        <form onSubmit={(e) => handleSubmit(e, details)}>
          <TextField
            // error={true}
            fullWidth
            className=""
            onChange={handleChange}
            // id="outlined-error-helper-text"
            label="Username"
            name="username"
            size="small"
            sx={{ mb: 1 }}
            //   defaultValue="Hello World"
            // helperText={true && "no account exists"}
          />
          <TextField
            label="Password"
            size="small"
            name="password"
            onChange={handleChange}
            sx={{ mb: 2 }}
            type={showPassword ? "text" : "password"}
            // value={password}
            // error={true}
            fullWidth
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
          {error && (
            <span className="text-center font-medium text-red-500 text-sm flex justify-center mb-2 -mt-2">
              {error}
            </span>
          )}
          {/* <div className="flex items-center mt-1 mb-2 ml-1">
            <label
              htmlFor="checked-checkbox"
              className="text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 ml-2  cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div> */}
          <button
            type="submit"
            className="w-full text-white  bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
          <span className="text-center text-base flex justify-center my-2">
            Dont have an account?&nbsp;
            <Link className="hover:text-blue-800 hover:underline" to="/signup">
              Sign up
            </Link>
          </span>
          <span className="flex justify-center my-3 text-lg font-semibold">
            OR
          </span>
          {/* // <<======= Google =======>> */}
          <button
            type="button"
            onClick={google}
            className="w-full text-black  bg-white shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:shadow-[rgba(0,0,0,0.25)_1.95px_1.95px_2.6px] border hover:border-gray-500 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
          >
            <img
              src="google.svg"
              alt="google logo"
              className="mr-2 -ml-1 w-6 h-6"
            />
            {/* <svg
              className="mr-2 -ml-1 w-4 h-4 google-gradient"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg> */}
            Sign up with Google<div></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

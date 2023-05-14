import React, { useState } from "react";
import { Link } from "react-router-dom";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  return (
    <div className="">
      <div className="bg-gray-100 w-full md:w-3/5 lg:w-2/5 h-96 p-3 my-10 mb-24 mx-auto rounded-3xl shadow-lg border  border-gray-200">
        <div className="heading">
          <h1 className="text-4xl font-bold font-mono text-center">Sign in</h1>
        </div>
        <div className="body mb-5 my-8">
          <input
            type="text"
            placeholder="Username or phone number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none w-full p-3 "
          />
          <div className="relative">
            <input
              type={`${passShow ? 'text' : 'password'}`}
              placeholder="Password"
              className="my-7 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none w-full p-3 "
            />
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setPassShow(!passShow)}
            >
              {
                passShow ? <UilEyeSlash /> : <UilEye />
              }
            </span>
          </div>
          <button className="w-full py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600">
            Submit
          </button>
        </div>
        <div className="footer  text-center">
          <Link
            to="/signup"
            className="text-blue-500 text-lg hover:underline underline-offset-1"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

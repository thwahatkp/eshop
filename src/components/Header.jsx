import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilX from "@iconscout/react-unicons/icons/uil-multiply";
import UilAccount from "@iconscout/react-unicons/icons/uil-user";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  let toggleMobile = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <div className="md:flex md:flex-row md:justify-between text-center">
        <div className="flex flex-row justify-center items-center relative">
          <div
            className="md:hidden absolute  left-0 cursor-pointer"
            onClick={toggleMobile}
          >
            {isMobile ? (
              <UilX size={30} color="#91939d" />
            ) : (
              <UilBars size={30} color="#91939d" />
            )}
          </div>
          <Link to="/">
            <img
              src="images/eshop-full.svg"
              className="rounded-lg w-auto h-10 md:h-11"
              alt=""
            />
          </Link>
          <div className="absolute mx-12 right-0 md:hidden">
            {" "}
            <NavLink
              href="/"
              className=" text-gray-500 border border-gray-400 hover:border-gray-800 hover:text-gray-800 p-3  py-1.5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-400 hover:bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                20
              </div>
            </NavLink>
          </div>
          <div className="absolute -right-4 md:hidden px-3">
            <NavLink>
              <UilAccount
                size={35}
                className="text-gray-500 hover:text-gray-600"
              />
            </NavLink>
          </div>
          {/* <div className="bg-gradient-to-r from-purple-600 to-red-400 w-10 h-10 rounded-lg"></div> */}
          {/* <h1 className="text-3xl text-gray-600 ml-2">E - Shop</h1> */}
        </div>
        <div
          className={` mt-2 flex flex-col md:block ${!isMobile && "hidden"}`}
        >
          <NavLink
            to="/"
            onClick={toggleMobile}
            className={({ isActive }) =>
              isActive
                ? "text-purple-800 border-0  md:border rounded-full py-2 border-purple-600 px-4"
                : "text-gray-600 hover:text-purple-600 py-3 px-4 "
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={toggleMobile}
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-purple-800 border-0  md:border rounded-full py-2 border-purple-600 px-4"
                : "text-gray-600 hover:text-purple-600 py-3 px-4"
            }
          >
            Shop
          </NavLink>
          <NavLink
            onClick={toggleMobile}
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-purple-800 border-0  md:border rounded-full py-2 border-purple-600 px-4"
                : "text-gray-600 hover:text-purple-600 py-3 px-4"
            }
          >
            Blog
          </NavLink>
          <NavLink
            onClick={toggleMobile}
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-800 border-0  md:border rounded-full py-2 border-purple-600 px-4 mr-1"
                : "text-gray-600 hover:text-purple-600 py-3 px-4 "
            }
          >
            Contact
          </NavLink>
          <NavLink
            onClick={toggleMobile}
            href="/"
            className="bg-purple-600 text-gray-50 hover:bg-purple-700 px-5 p-3 rounded-full 
            relative hidden md:inline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block m-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Cart
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-400 hover:bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              25
            </div>
          </NavLink>

          <NavLink
            onClick={toggleMobile}
            to="/login"
            className={({ isActive }) =>
              `${
                isActive
                  ? "md:ml-4 text-gray-600 hover:text-purple-600 py-3 text-purple-600"
                  : "md:ml-4 text-gray-600 hover:text-purple-600 py-3"
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;

// import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../helper/axiosHelper";
import { logout } from "../../redux/reducers/user";

// import { sidebar } from "../../redux/reducers/layout";
const Search = () => {
  // <<======= Actions =======>>
  const dispatch = useDispatch();
  // <<======= State =======>>
  const [anchorElUser, setAnchorElUser] = useState(false);
  const user = useSelector((state) => state.user);
  // <<======= Functions =======>>
  const handleOpenUserMenu = () => {
    setAnchorElUser(!anchorElUser);
  };

  const handleLogout = () => {
    post("logout")
      .then((res) => {
        if (res.status === 200) {
          dispatch(logout());
          localStorage.removeItem("details");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    anchorElUser ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  }, [anchorElUser]);

  return (
    <section className="py-5 pb-2 md:pb-5">
      <div className="max-w-[90%] mx-auto grid grid-cols-3 md:grid-cols-[15%_68%_15%] gap-6">
        <div className="">
          <img className="w-32 md:w-auto h-auto" src="images/eshop-full.svg" alt="" />
        </div>

        <div className="block md:hidden"></div>

        <div className="order-3 h-10 md:h-auto  col-span-3 md:order-none md:col-auto  flex items-center search-boxjustify-end  border-2 border-[rgba(0, 0, 0, 0.1)] rounded-[50px] gap-1">
          <i className=" w-[5%] text-center opacity-50 py-[15px] px-5 text-[17px] fa fa-search"></i>
          <input
            type="text"
            placeholder="Search and hit enter..."
            className=" w-[60%] sm:w-[75%] lg:w-[72%] xl:w-[85%] placeholder:text-sm md:placeholder:text-base p-0 pl-[10px] border-none outline-none"
          />
          <span className=" text-[10px] sm:text-xs w-[40%] sm:w-[30%] text-right mr-2 lg:w-[18%] lg:text-sm  xl:w-[15%] opacity-50 border-l-2 border-[#0000001a] p-[10px]">
            All Category
          </span>
        </div>

        {/* <div className="width justify-center w-[30%] md:w-[15%] flex items-center"> */}
        <div className=" justify-end flex items-center">
          <div className="cart relative decoration-0 text-black">
            <Link to="/cart">
              <i className="fa hover:text-primary-hover fa-shopping-bag cursor-pointer  w-[40px] h-[40px]  leading-[40px] md:w-[50px] md:h-[45px] md:leading-[50px]  md:bg-[#f3f5f9] ml:2 md:ml-5 text-center md:rounded-full"></i>
              {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              <span className="absolute -top-[10px] right-0 w-5 h-5 rounded-full text-center bg-secondary  text-white">{0}</span>
            </Link>
          </div>

          {/* <========>> */}

          <i
            onClick={handleOpenUserMenu}
            className="w-[40px] hover:text-primary-hover cursor-pointer h-[40px] leading-[40px] md:w-[50px] md:h-[50px] md:leading-[50px] fa fa-user  md:bg-[#f3f5f9] ml-2 md:ml-5 text-center md:rounded-full"></i>

          <div
            className={`fixed inset-0 z-10 m-0 ${
              anchorElUser ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
            } ease-in-out duration-700 transition-opacity  justify-end flex bg-[rgba(0,0,0,0.5)] `}>
            <div className={`mr-9 mt-20 bg-white h-fit p-4 border rounded`}>
              <ul className="flex space-y-3 flex-col">
                <li>
                  <span onClick={handleOpenUserMenu} className="hover:text-primary cursor-pointer">
                    Account
                  </span>
                </li>
                <li>
                  {user.logged ? (
                    <span className="hover:text-primary cursor-pointer" onClick={handleLogout}>
                      Logout
                    </span>
                  ) : (
                    <NavLink onClick={handleOpenUserMenu} to="/login">
                      <span className="hover:text-primary cursor-pointer">Login</span>
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* <========>> */}

          {/* <i className="w-[40px] h-[40px] leading-[40px] md:w-[50px] md:h-[50px] md:leading-[50px] fa fa-user  bg-[#f3f5f9] ml-5 text-center rounded-full"></i> */}
          {/* <i
            onClick={() => dispatch(sidebar(true))}
            className="md:hidden fa-solid fa-bars text-center leading-[50px] ml-3 text-xl cursor-pointer"
          ></i> */}
        </div>
      </div>
    </section>
  );
};

export default Search;

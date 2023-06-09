import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { category, sidebar } from "../../redux/reducers/layout";

const Navbar = () => {
  const dispatch = useDispatch();
  // const state = useSelector(state=>state)
  const layout = useSelector((state) => state.layout);
  // Toogle Menu
  return (
    <>
      <header className=" h-12 lg:h-[9vh] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="max-w-[90%] m-auto flex justify-between">
          <div className="h-10 lg:h-10  bg-[#f6f9fc] py-0 md:px-[30px] rounded-[5px] mt-[5px] flex justify-between items-center cursor-pointer">
            <span className="fa-solid fa-border-all mr-2 md:mr-5 text-xl lg:text-[30px] relative top-1/2 -translate-y-1/2"></span>
            <h4
              onClick={() => dispatch(category(!layout.category))}
              className="text-sm lg:text-base font-medium mt-2.5 md:mt-3"
            >
              Categories{" "}
              <i
                className={`fa ${
                  layout.category ? "fa-chevron-up" : "fa-chevron-down"
                } ml-[10px] transition`}
              ></i>
            </h4>
          </div>

          <i
            onClick={() => dispatch(sidebar(true))}
            className="lg:hidden fa-solid fa-bars text-center leading-[50px] ml-3 text-xl cursor-pointer"
          ></i>

          <div className="hidden lg:block">
            <ul className={`capitalize flex leading-[11vh] space-x-[30px]`}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/pages"
                >
                  pages
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/user"
                >
                  user account
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/vendor"
                >
                  vendor account
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/track"
                >
                  track my order
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive && "text-primary"
                    } transition-[0.5s] text-[15px] font-normal hover:text-primary-hover`
                  }
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

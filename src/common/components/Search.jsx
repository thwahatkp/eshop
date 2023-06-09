// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { sidebar } from "../../redux/reducers/layout";
const Search = () => {

  return (
    <section className="py-5 pb-2 md:pb-5">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div className="w-3/12 md:w-1/6">
          <img className="w-auto h-auto" src="images/eshop-full.svg" alt="" />
        </div>

        <div className="flex w-3/5 md:flex items-center search-boxjustify-end md:w-4/5 border-2 border-[#0000001a] rounded-[50px]">
          <i className=" w-[5%] text-center opacity-50 py-[15px] px-5 text-[17px] fa fa-search"></i>
          <input
            type="text"
            placeholder="Search and hit enter..."
            className="w-4/5 grow placeholder:text-sm md:placeholder:text-base md:w-3/5 xl:w-full p-[10px] border-none outline-none"
          />
          <span className="hidden md:block lg:w-1/5  opacity-50 border-l-2 border-[#0000001a] p-[10px]">
            All Category
          </span>
        </div>

        {/* <div className="width justify-center w-[30%] md:w-[15%] flex items-center"> */}
        <div className="width justify-end w-[16%] md:w-[15%] flex items-center">
          <i className="w-[40px] hover:text-primary-hover cursor-pointer h-[40px] leading-[40px] md:w-[50px] md:h-[50px] md:leading-[50px] fa fa-user  md:bg-[#f3f5f9] ml-2 md:ml-5 text-center md:rounded-full"></i>

          <div className="cart relative decoration-0 text-black">
            <Link to="/cart">
              <i className="fa hover:text-primary-hover fa-shopping-bag cursor-pointer  w-[40px] h-[40px]  leading-[40px] md:w-[50px] md:h-[45px] md:leading-[50px]  md:bg-[#f3f5f9] ml:2 md:ml-5 text-center md:rounded-full"></i>
              {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              <span className="absolute -top-[10px] right-0 w-5 h-5 rounded-full text-center bg-[#e94560]  text-white">
                {0}
              </span>
            </Link>
          </div>
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

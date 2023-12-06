import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { getCategories } from "../../redux/reducers/menus";
const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const state = useSelector((state) => state.layout);
  const category = useSelector((state) => state.menus.category);

  return (
    <>
      {state.category && (
        <div
          data-aos="fade-right"
          className={`transition delay-150 duration-300 ease-in-out category shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-white lg:w-[23%] h-[510px] py-[15px] rounded-[5px] mt-1`}>
          {category.data.map((value, index) => {
            if (category.loading) {
              return (
                <div className="box transition py-0 my-[10px] px-5 flex f_flex hover:text-primary rounded-xl cursor-pointer" key={index}>
                  <Skeleton variant="rounded" width="30px" height={30} />
                  <Skeleton variant="text" width={`${Math.random() * (55 - 25) + 25}%`} className="mx-5" />
                </div>
              );
            }
            return (
              <div className="box transition py-0 px-5 flex f_flex hover:text-primary hover:shadow-md rounded-xl cursor-pointer" key={index}>
                <img className="w-[30px] h-[30px] mt-[10px] object-contain" src={import.meta.env.VITE_API_URL_CYCLIC + value.img} alt="" />
                <span className="my-[10px] mx-5">{value.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Categories;

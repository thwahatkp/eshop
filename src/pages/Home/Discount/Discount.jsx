import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="Discount  bg-[#f6f9fc] py-[50px]">
        <div className="max-w-[90%] m-auto overflow-hidden">
          <div className="heading d_flex flex justify-between">
            <div className="heading-left row  flex items-center">
              <img className=" w-6 h-6 md:w-10 md:h-10" src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2 className="text-sm  md:text-[1.5em] m-[5px] font-semibold">Big Discounts</h2>
            </div>
            <div className="heading-right row text-right text-gray-500 w-1/2 flex items-center justify-end gap-1 cursor-pointer">
              <span className="text-secondary text-sm md:text-base">View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;

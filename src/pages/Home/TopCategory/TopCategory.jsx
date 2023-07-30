import TopCart from "./TopCart";

const TopCategory = () => {
  return (
    <>
      <section className="TopCate background relative">
        <div className="container max-w-[90%] m-auto">
          <div className="heading d_flex flex justify-between">
            <div
              // data-aos="fade-right"
              // data-aos-duration="200"
              // data-aos-offset="120"
              className="heading-left row  f_flex w-1/2 flex items-center"
            >
              <i className="fa-solid fa-border-all text-[30px] text-secondary m-2.5 font-black"></i>
              <h2 className="text-xl lg:text-[25px] m-1.5 font-semibold">
                Top Categories
              </h2>
            </div>
            <div className="heading-right row text-right text-gray-500 w-1/2 flex items-center justify-end gap-1 cursor-pointer">
              <span>View all</span>
              <i className="fa-solid fa-caret-right text-right text-gray-500"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCategory;

import Card from "./Card";

// import Cart from "./Cart";
const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background bg-[#f6f9fc] py-[50px]">
        <div className="container max-w-[90%] m-auto">
          <div className="heading d_flex flex justify-between">
            <div
              // data-aos="fade-right"
              // data-aos-duration="200"
              // data-aos-offset="300"
              className="heading-left row  f_flex w-1/2 flex items-center"
            >
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                className="w-[40px] h-[40px] mt-[5px]"
              />
              <h2 className="text-xl lg:text-[25px] m-[5px] font-semibold">
                New Arrivals{" "}
              </h2>
            </div>
            <div className="heading-right row text-right text-gray-500 w-1/2 flex items-center justify-end gap-1 cursor-pointer">
              <span className="text-secondary">View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Card />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;

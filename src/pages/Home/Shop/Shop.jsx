import Category from "./Category";
import ShopCart from "./ShopCart";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background py-[40px]">
        <div className="max-w-[90%] d_flex flex justify-between m-auto">
          <Category />
          <div className="contentWidth ml-[30px] lg:w-[77%] pt-4 mt-5">
            <div className="heading d_flex flex justify-between">
              <div className="heading-left row flex">
                <h2 className="text-xl lg:text-2xl m[5px] font-semibold">
                  Mobile Phones
                </h2>
              </div>
              <div className="heading-right row text-right text-gray-500 flex justify-end items-center gap-1">
                <span>View all</span>
                <i className="fa-solid fa-caret-right text-right text-gray-500"></i>
              </div>
            </div>
            <div className=" product-content grid  gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <ShopCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

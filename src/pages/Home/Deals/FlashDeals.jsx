import FlashCard from "./FlashCard";
// import "./style.css";

const productItems = [
  {
    id: 1,
    discount: 50,
    cover: "./flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 2,
    discount: 40,
    cover: "./flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 6,
    discount: 50,
    cover: "./flash/flash-3.png",
    name: "Shoes",
    price: 100,
  },
];

const FlashDeals = () => {
  return (
    <>
      <section className="flash bg-[#f6f9fc] py-[50px] px-0 mt-8 md:mt-0">
        <div className="container max-w-[90%] m-auto">
          <div className="heading f_flex flex items-center">
            <i className="fa fa-bolt text-[#e94560] m-2.5"></i>
            <h1 className="text-xl md:text-[1.5em] font-semibold">Flash Deals</h1>
          </div>
            <FlashCard productItems={productItems} /*addToCart={addToCart}*/ />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;

import { useState } from "react";

const ShopCart = () => {
  const shopItems = [
    {
      id: 7,
      cover: "./shops/shops-1.png",
      name: "Mapple Earphones",
      price: "180",
      discount: "25",
    },
    {
      id: 8,
      cover: "./shops/shops-2.png",
      name: "Vivo android one",
      price: "120",
      discount: "10",
    },
    {
      id: 9,
      cover: "./shops/shops-3.png",
      name: "Sony Light",
      price: "20",
      discount: "50 ",
    },
    {
      id: 10,
      cover: "./shops/shops-4.png",
      name: "Iphone",
      price: "999",
      discount: "10 ",
    },
    {
      id: 11,
      cover: "./shops/shops-5.png",
      name: "Ceats wireless earphone",
      price: "80",
      discount: "20 ",
    },
    {
      id: 12,
      cover: "./shops/shops-7.png",
      name: "Redimi Phone",
      price: "400",
      discount: "20 ",
    },
    {
      id: 13,
      cover: "./shops/shops-8.png",
      name: "Xeats Bluetooth earphones",
      price: "60",
      discount: "5 ",
    },
    {
      id: 14,
      cover: "./shops/shops-9.png",
      name: "Airpod",
      price: "120",
      discount: "10",
    },
    {
      id: 15,
      cover: "./shops/shops-10.png",
      name: "Silver Cap",
      price: "5",
      discount: "2",
    },
  ];
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div
            key={index}
            className="box grid transition ease-in-out duration-700 hover:scale-105 cursor-pointer"
          >
            <div className="product mtop bg-white p-5 relative rounder-[8px] shadow m-2.5">
              <div className="img">
                <span className="discount absolute top-0 left-0 bg-secondary py-[3px] px-2.5 text-[12px] rounded-[50px] text-white m-2.5">
                  {shopItems.discount}% Off
                </span>
                <img className="w-full h-full" src={shopItems.cover} alt="" />
                <div className="product-like absolute top-0 right-0 m-2.5 /*opacity-0*/ transition">
                  <label className="bg-[#0f3460] py-[1px] px-2.5 text-[12px] text-white rounded-[50px]">
                    {count}
                  </label>{" "}
                  <br />
                  <i
                    className="fa-regular fa-heart text-[20px] my-2.5 mx-[3px]"
                    onClick={increment}
                  ></i>
                </div>
              </div>
              <div className="product-details font-normal text-[17px]">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                </div>
                <div className="price flex justify-between text-secondary">
                  <h4>₹{shopItems.price}.00 </h4>
                  {/* step : 3
                   if hami le button ma click garryo bahne
                  */}
                  <button className="bg-none text-secondary text-xl border border-[#03004717] w-9 h-9 rounded-md">
                    {/* <button onClick={() => addToCart(productItems)}> */}
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;

//   <div className="box" key={index}>
//     <div className="product mtop transition duration-[0.5s] bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3_0_71/9%)_0px_1px_3px] m-[10px] h-auto">
//       <div className="img">
//         <span className="discount absolute top-0 left-0 bg-secondary py-[3px] px-[10px] text-xs rounded-[50px] text-[#fff] m-[10px]">
//           {shopItems.discount}% Off
//         </span>
//         <img className="w-full h-full" src={shopItems.cover} alt="" />
//         <div className="product-like absolute top-0 right-0 m-[10px] transition">
//           <label className="bg-[#0f3460] py-[1px] px-[10px] text-white rounded-[50px]">
//             {count}
//           </label>{" "}
//           <br />
//           <i
//             className="fa-regular fa-heart text-xl my-[10px] mx-[3px]"
//             onClick={increment}
//           ></i>
//         </div>
//       </div>
//       <div className="product-details">
//         <h3 className="font-normal text-[17px]">{shopItems.name}</h3>
//         <div className="rate">
//           <i className="fa fa-star font-[15px] text-[#ffcd4e] m-[5px] ml-0"></i>
//           <i className="fa fa-star font-[15px] text-[#ffcd4e] m-[5px] ml-0"></i>
//           <i className="fa fa-star font-[15px] text-[#ffcd4e] m-[5px] ml-0"></i>
//           <i className="fa fa-star font-[15px] text-[#ffcd4e] m-[5px] ml-0"></i>
//           <i className="fa fa-star font-[15px] text-[#ffcd4e] m-[5px] ml-0"></i>
//         </div>
//         <div className="price flex justify-between text-secondary">
//           <h4>${shopItems.price}.00 </h4>
//           <button className="bg-none text-secondary text-xl transition border border-[#03004717] w-9 h-9 rounded-md">
//             {/* <button onClick={() => addToCart(shopItems)}> */}
//             <i className="fa fa-plus"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

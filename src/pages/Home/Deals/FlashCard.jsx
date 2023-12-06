import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";

import { motion } from "framer-motion";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next -right-5">
        <i className="fa fa-long-arrow-alt-right text-[20px] text-yellow-500"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev -left-5">
        <i className="fa fa-long-arrow-alt-left text-[20px] text-green-400"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="grid grid-cols-4">
    <Slider {...settings}>
      <motion.div initial={{ scale: 0.8, opacity: 0.7 }} transition={{ duration: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} className="box grid">
        <div className="product mtop bg-white p-5 relative rounded-[8px] shadow m-2.5">
          <div className="img">
            <div className="flex items-center justify-center w-full h-36 md:h-40 xl:h-56 rounded sm:w-full" id="skeleton-animation">
              <svg className="w-10 h-10 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="product-details font-normal text-[17px]">
            <Skeleton variant="text" width={150} style={{ marginBottom: "10px" }} />
            <Skeleton animation="wave" variant="text" width={100} style={{ marginBottom: "5px" }} />
            <div className="price flex justify-between text-secondary">
              <Skeleton animation="wave" variant="text" width={80} />
              <Skeleton animation="wave" variant="rounded" width={35} height={35} />
            </div>
          </div>
        </div>
      </motion.div>
      {productItems.map((productItems, idx) => {
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            key={idx}
            className="box grid ">
            <div className="product mtop bg-white p-5 relative rounded-[8px] shadow m-2.5">
              <div className="img">
                <span className="discount absolute top-0 left-0 bg-secondarypy-[3px] px-2.5 text-[12px] rounded-[50px] text-secondary m-2.5">
                  {productItems.discount}% Off
                </span>
                <img src={productItems.cover} alt="" />
                <div className="product-like absolute top-0 right-0 m-2.5 /*opacity-0*/ transition">
                  <label className="bg-[#0f3460] py-[1px] px-2.5 text-[12px] text-white rounded-[50px]">{count}</label> <br />
                  <i className="fa-regular fa-heart text-[20px] my-2.5 mx-[3px]" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details font-normal text-[17px]">
                <h3>{productItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                </div>
                <div className="price flex justify-between text-secondary">
                  <h4>₹{productItems.price}.00 </h4>
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
          </motion.div>
        );
      })}
    </Slider>
    //  </div>
  );
};

export default FlashCard;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    // autoplay: true,
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
      {productItems.map((productItems, idx) => {
        return (
          <div key={idx} className="box grid">
            <div className="product mtop bg-white p-5 relative rounder-[8px] shadow m-2.5">
              <div className="img">
                <span className="discount absolute top-0 left-0 bg-[#e94560] py-[3px] px-2.5 text-[12px] rounded-[50px] text-white m-2.5">
                  {productItems.discount}% Off
                </span>
                <img src={productItems.cover} alt="" />
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
                <h3>{productItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                  <i className="fa fa-star text-[15px] text-[#ffcd4e] my-[5px] mx-[5px] mb-0"></i>
                </div>
                <div className="price flex justify-between text-[#e94560]">
                  <h4>₹{productItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button className="bg-none text-[#e94560] text-xl border border-[#03004717] w-9 h-9 rounded-md">
                    {/* <button onClick={() => addToCart(productItems)}> */}
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
    //  </div>
  );
};

export default FlashCard;

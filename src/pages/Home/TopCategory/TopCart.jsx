import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

const TopCart = () => {
  const Tdata = [
    {
      cover: "./top/category-1.png",
      para: "headphone",
      desc: "3k orders this week",
    },
    {
      cover: "./top/category-2.png",
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: "./top/category-3.png",
      para: "sunglass",
      desc: "6k orders this week",
    },
    {
      cover: "./top/category-2.png",
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: "./top/category-3.png",
      para: "sunglass",
      desc: "6k orders this week",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
        breakpoint: 994,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.7 }}
          transition={{ duration: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
          }}
          className="box product bg-white p-5 relative rounded-md shadow flex flex-col items-center justify-center  cursor-pointer">
          {/* <div className="nametop d_flex relative w-full flex justify-between"></div> */}
          <div className="img grow relative rounded-lg">
            <span
              className="tleft border border-gray-200 py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer top-2 h-5 w-16"
              id="skeleton-animation"></span>
            <span
              className="tright border border-gray-200 py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer right-0 top-2 h-5 w-16"
              id="skeleton-animation"></span>
            <div className="rounded-md min-w-full h-[122px] flex items-center justify-center" id="skeleton-animation">
              <svg className="w-10 h-10 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </motion.div>
        {Tdata.map((value, index) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              initial={{ scale: 0.8, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={index}
              className="box product bg-white p-5 relative rounded-md shadow flex flex-col items-center justify-center cursor-pointer">
              {/* <div className="nametop d_flex relative w-full flex justify-between"></div> */}
              <div className="img grow relative rounded-lg">
                <span className="tleft bg-[#0f3460] text-white text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer top-2 ">
                  {value.para}
                </span>
                <span className="tright bg-[aliceblue] text-black text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer right-0 top-2">
                  {value.desc}
                </span>
                <img loading="lazy" className="rounded-md min-w-full" src={value.cover} alt="" />
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopCart;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";

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
        <div className="box product bg-white p-5 relative rounded-md shadow m-5 flex flex-col items-center justify-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
          <div className="nametop d_flex relative w-full flex justify-between">
            <Skeleton variant="text" width="40%" height={20} style={{ marginBottom: "5px" }} />
            <Skeleton variant="text" width="40%" height={20} style={{ marginBottom: "5px" }} />
          </div>
          <div className="img grow relative rounded-lg">
            <Skeleton variant="rectangular" width="100%" height={81} style={{ marginBottom: "10px", borderRadius: "8px" }} />
          </div>
        </div>
        {Tdata.map((value, index) => {
          return (
            <div
              key={index}
              className="box product bg-white p-5 relative rounded-md shadow m-5 flex flex-col items-center justify-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
              {/* <div className="nametop d_flex relative w-full flex justify-between"></div> */}
              <div className="img grow relative rounded-lg">
                <span className="tleft bg-[#0f3460] text-white text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer top-2 ">
                  {value.para}
                </span>
                <span className="tright bg-[aliceblue] text-black text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute cursor-pointer right-0 top-2">
                  {value.desc}
                </span>
                <img loading="lazy" className="rounded-md" src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopCart;

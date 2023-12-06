import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";
const Dcard = () => {
  const Ddata = [
    {
      cover: "./discount/discount-1.png",
      name: "BenuX 2022",
      price: "$250",
    },
    {
      cover: "./discount/discount-2.png",
      name: "Sony TV 1080p",
      price: "$450",
    },
    {
      cover: "./discount/discount-3.png",
      name: "Sony PS4",
      price: "$50",
    },
    {
      cover: "./discount/discount-4.png",
      name: "Setgearr 2022",
      price: "$100",
    },
    {
      cover: "./discount/discount-5.png",
      name: "Tony BGB",
      price: "$20",
    },
    {
      cover: "./discount/discount-6.png",
      name: "RG products",
      price: "$200",
    },
    {
      cover: "./discount/discount-7.png",
      name: "Ranasonic 2022",
      price: "$300",
    },
    {
      cover: "./discount/discount-8.png",
      name: "Pune HD",
      price: "$30",
    },
    {
      cover: "./discount/discount-9.png",
      name: "Sony CCTV",
      price: "$80",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 878,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 678,
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
    <>
      <Slider {...settings}>
        <div
          // data-aos="zoom-in-up"
          // data-aos-duration="200"
          // data-aos-offset="250"
          className="box product bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5 hover:scale-105 transition ease-in-out duration-500 cursor-pointer">
          <div className="img">
            <div id="skeleton-animation" className="w-full h-40 rounded-md flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="w-10/12 h-4 rounded-md mt-2" id="skeleton-animation"></div>
          <div className="w-1/2 h-4 rounded-md mt-2" id="skeleton-animation"></div>
        </div>
        {Ddata.map((value, index) => {
          return (
            <div
              key={index}
              // data-aos="zoom-in-up"
              // data-aos-duration="200"
              // data-aos-offset="250"
              className="box product bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5 hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
              // className="box product bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5 hover:scale-105 transition ease-in-out duration-500 cursor-pointer hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]"
            >
              <div className="img">
                <img className="w-full h-full" src={value.cover} alt="" width="100%" />
              </div>
              <h4 className="font-norma">{value.name}</h4>
              <span className="text-secondary text-sm font-medium">{value.price}</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;

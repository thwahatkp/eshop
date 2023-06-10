import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="overflow-hidden">
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div
                className="box product bg-white p-5 relative rounded-md shadow m-5"
                key={index}
              >
                <div className="nametop d_flex relative w-full flex justify-between">
                  <span className="tleft left-0 bg-[#0f3460] text-white text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute top-[10px] cursor-pointer">
                    {value.para}
                  </span>
                  <span className="tright right-3 lg:right-1 bg-[aliceblue] text-black text-[12px] py-1.5 px-2.5 rounded-[50px] m-1 absolute top-[10px] cursor-pointer">
                    {value.desc}
                  </span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopCart;

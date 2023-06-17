import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        {Ddata.map((value, index) => {
          return (
            <>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="200"
                data-aos-offset="250"
                className="box product bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5 hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
                // className="box product bg-[#fff] p-5 relative rounded-[8px] shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5 hover:scale-105 transition ease-in-out duration-500 cursor-pointer hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]"
                key={index}
              >
                <div className="img">
                  <img
                    className="w-full h-full"
                    src={value.cover}
                    alt=""
                    width="100%"
                  />
                </div>
                <h4 className="font-norma">{value.name}</h4>
                <span className="text-secondary text-sm font-medium">
                  {value.price}
                </span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;

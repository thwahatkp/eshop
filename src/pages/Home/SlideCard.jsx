import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../redux/reducers/slider";

const Sdata = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./SlideCard/slide-1.png",
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./SlideCard/slide-2.png",
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./SlideCard/slide-3.png",
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./SlideCard/slide-4.png",
  },
];

const SlideCard = () => {
  const dispatch = useDispatch();
  const slider = useSelector((state) => state.slider.data);
  console.log(slider);
  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch]);

  const settings = {
    dots: true,
    pauseOnHover: false,
    infinite: true,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <div className="w-full">
        <Slider {...settings}>
          {slider.map((value, index) => {
            return (
              <div key={value._id}>
                <div
                  className="box flex flex-col max-h-[40%] lg:max-h-none items-center lg:items-start lg:flex-row justify-between lg:mt-[80px]"
                  key={index}>
                  <div className="left flex order-2 lg:order-none flex-col items-center lg:items-start first-letter:lg:max-w-none lg:w-[85%]">
                    <h1 className="text-center lg:text-left text-2xl leading-10 lg:text-[45px] lg:leading-[55px] lg:mt-[50px]  lg:mb-[20px] font-semibold">
                      {value.title}
                    </h1>
                    <p className="text-center text-sm md:text-base lg:text-left  my-5 mx-0">{value.description}</p>
                    <button className="py-[10px]  px-10 font-bold text-white rounded-[8px] bg-primary mb-8 lg:mb-0">{value.btn_name}</button>
                  </div>
                  <div className="right order-1 lg:order-none mt-10 lg:mt-0 flex items-center justify-center">
                    <img className="h-56 lg:h-full object-center" loading="lazy" src={`${import.meta.env.VITE_API_URL}${value.img}`} alt="" />
                  </div>
                </div>
              </div>

              // <div key={index}>
              //   <div
              //     className="box flex flex-col max-h-[40%] lg:max-h-none items-center lg:items-start lg:flex-row justify-between lg:mt-[80px]"
              //     key={index}>
              //     <div className="left flex order-2 lg:order-none flex-col items-center lg:items-start first-letter:lg:max-w-none lg:w-[85%]">
              //       <h1 className="text-center lg:text-left text-2xl leading-10 lg:text-[45px] lg:leading-[55px] lg:mt-[50px]  lg:mb-[20px] font-semibold">
              //         {value.title}
              //       </h1>
              //       <p className="text-center text-sm md:text-base lg:text-left  my-5 mx-0">{value.desc}</p>
              //       <button className="py-[10px]  px-10 font-bold text-white rounded-[8px] bg-primary mb-8 lg:mb-0">Visit Collections</button>
              //     </div>
              //     <div className="right order-1 lg:order-none mt-10 lg:mt-0 flex items-center justify-center">
              //       <img className="h-56 lg:h-full object-center" src={value.cover} alt="" />
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SlideCard;

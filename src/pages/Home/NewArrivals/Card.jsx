const Card = () => {
  const Ndata = [
    {
      cover: "./arrivals/arrivals1.png",
      name: "Sunglass",
      price: "150",
    },
    {
      cover: "./arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
    },
    {
      cover: "./arrivals/arrivals3.png",
      name: "Smart Watch",
      price: "50",
    },
    {
      cover: "./arrivals/arrivals4.png",
      name: "Lipstick",
      price: "15",
    },
    {
      cover: "./arrivals/arrivals5.png",
      name: "Green Plant",
      price: "10",
    },
    {
      cover: "./arrivals/arrivals6.png",
      name: "Bonsai tree",
      price: "400",
    },
  ];
  return (
    <>
      <div className="content  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[30px] product bg-[#fff] p-5 relative rounded-lg shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-2.5">
        {Ndata.map((val, index) => {
          return (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="200"
              data-aos-offset="250"
              className="box cursor-pointer"
              key={index}
            >
              <div className="img">
                <img
                  className="w-full h-full hover:scale-105 transition ease-in-out duration-300"
                  src={val.cover}
                  alt=""
                />
              </div>
              <h4 className="font-normal mt-1">{val.name}</h4>
              <span className="text-secondary text-sm font-medium">
                ₹{val.price}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;

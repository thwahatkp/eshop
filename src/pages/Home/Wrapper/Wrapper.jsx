const Wrapper = () => {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper background bg-background text-center py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-w-[90%] m-auto text-center">
          {data.map((val, index) => {
            return (
              <div
                className="product p-7 bg-[#fff] relative rounded-lg shadow-[rgb(3,0,71/9%)_0px_1px_3px] m-[10px]"
                key={index}
              >
                <div className="img icon-circle w-[70px] h-[70px] leading-[70px] m-auto mb-5  text-center bg-[#f3f5f9] rounded-[50%]">
                  <i className="text-[25px]">{val.cover}</i>
                </div>
                <h3 className="text-base font-medium">{val.title}</h3>
                <p className="text-sm mt-5 text-gray-500">{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

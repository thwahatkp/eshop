import { motion } from "framer-motion";

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
        <div
          // data-aos="zoom-in-up"
          // data-aos-duration="200"
          // data-aos-offset="250"
          className="box cursor-pointer">
          <div className="img">
            <div id="skeleton-animation" className="flex h-[165px] rounded-lg items-center justify-center">
              <motion.svg
                whileHover={{ scale: 1.06, transition: { duration: 0.1 } }}
                className="w-10 h-10 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </motion.svg>
            </div>
          </div>
          <div className="w-10/12 h-4 rounded-md mt-2" id="skeleton-animation"></div>
          <div className="w-1/2 h-4 rounded-md mt-2" id="skeleton-animation"></div>
        </div>
        {Ndata.map((val, index) => {
          return (
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="box cursor-pointer"
              key={index}>
              <div className="img">
                <motion.img whileHover={{ scale: 1.06, transition: { duration: 0.1 } }} className="w-full h-full" src={val.cover} alt="" />
              </div>
              <h4 className="font-normal mt-1">{val.name}</h4>
              <span className="text-secondary text-sm font-medium">₹{val.price}</span>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Card;

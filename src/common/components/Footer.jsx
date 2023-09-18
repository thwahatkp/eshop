const Footer = () => {
  return (
    <>
      <footer className="bg-[#0f3460] py-24 text-[#fff]">
        <div className="max-w-[90%]  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-auto">
          <div className="box">
            <h1 className="mb-7 text-secondary font-extrabold italic text-[2em]">
              E - SHOP
            </h1>
            <p className="text-sm font-light opacity-50 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon flex justify-between gap-1">
              <div className="img flex justify-between bg-[#0c2a4d] py-[15px] px-5 rounded-md">
                <i className="fa-brands fa-google-play text-xl m-[5px]"></i>
                <span className="mt-[5px]">Google Play</span>
              </div>
              <div className="img lex justify-between bg-[#0c2a4d] py-[15px] px-5 rounded-md">
                <i className="fa-brands fa-app-store-ios text-xl m-[5px]"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2 className="text-[1.5em] mb-5 font-semibold">About Us</h2>
            <ul className="flex flex-col space-y-3 opacity-50">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2 className="text-[1.5em] mb-5 font-semibold">Customer Care</h2>
            <ul className="flex flex-col space-y-3 opacity-50">
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="text-[1.5em] mb-5 font-semibold">Contact Us</h2>
            <ul className="flex flex-col space-y-3 opacity-50">
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

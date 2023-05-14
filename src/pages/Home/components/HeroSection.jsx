import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div className="md:flex md:flex-row mt-12 md:mt-20">
        <div className="md:w-2/5 flex justify-center flex-col items-center">
          <h2 data-aos="fade-up-right" className="font-serif text-5xl text-gray-600 mb-4 text-center md:text-start md:self-start cursor-pointer">
            Lorem ipsum dolor sit
          </h2>
          <p data-aos="fade-up-right" className="uppercase text-gray-600 tracking-wide  text-center md:self-start">
            Our brand tagline goes here
          </p>
          <p data-aos="fade-up-right" className="uppercase text-gray-600 tracking-wide text-center md:self-start">
            Our brand motto goes here
          </p>
          <Link
            data-aos="fade-up-right"
            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5 hover:from-pink-500 hover:to-red-600"
            to="/"
          >
            Shop Now
          </Link>
        </div>
        <div data-aos="fade-up-left" className="md:w-3/5">
          <img src="/images/hero-img.svg" alt="hero img" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

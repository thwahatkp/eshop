import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
        <>
            <div className="md:flex md:flex-row mt-20">
                <div className="md:w-2/5 flex justify-center flex-col items-center">
                    <h2 className="font-serif text-5xl text-gray-600 mb-4  text-center md:self-start">Lorem ipsum dolor sit</h2>
                    <p className="uppercase text-gray-600 tracking-wide  text-center md:self-start">Our brand tagline goes here</p>
                    <p className="uppercase text-gray-600 tracking-wide text-center md:self-start">Our brand motto goes here</p>
                    <Link className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5" to="/">Shop Now</Link>
                </div>
                <div className="md:w-3/5">
                    <img src="/images/hero-img.svg" alt="hero img" className="w-full" />
                </div>
            </div>
        </>
    );
};

export default HeroSection;

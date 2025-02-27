import React from "react";
import img from "../images/banner.png";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
const Banner = () => {
  return (
    <>
      <div className="w-full bg-[#F2F0F1]  h-auto   flex flex-col sm:flex-row justify-between mt-16 md:mt-0 ">
        <div className="px-1 my-auto sm:w-1/2 py-10   sm:px-5 md:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-sans">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-sm  mt-5 text-gray-700 font-sans text-start">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white  rounded-4xl mt-5 cursor-pointer w-52 h-12 ">
            Shop now
          </button>
          <div className="mt-12 flex justify-center sm:justify-start gap-x-4 flex-wrap text-center">
            <h2 className="text-4xl font-bold font-sans">
              200 + <br />
              <span className="text-sm font-normal">International Brands</span>
            </h2>
            <h2 className="text-4xl font-bold font-sans">
              2000 + <br />
              <span className="text-sm font-normal">High-Quality Products</span>
            </h2>
            <h2 className="text-4xl font-bold font-sans">
              30,000 + <br />
              <span className="text-sm font-normal">Happy Customers</span>
            </h2>
          </div>
        </div>
        <div className="       sm:w-1/2 flex justify-center  items-center">
          <img className="w-130 " src={img} alt="" />
        </div>
      </div>
      <div className="w-full bg-black  h-auto   flex flex-wrap  sm:flex-row justify-center sm:justify-between gap-5 py-5 px-4  sm:px-5 md:px-6 md:mt-0 ">
        <img className=" w-20 h-6 sm:w-30 md:w-40 " src={one} alt="" />
        <img className=" w-20 h-6 sm:w-30 md:w-40 " src={two} alt="" />
        <img className=" w-20 h-6 sm:w-30 md:w-40 " src={three} alt="" />
        <img className=" w-20 h-6 sm:w-30 md:w-40 " src={four} alt="" />
        <img className=" w-20 h-6 sm:w-30 md:w-40 " src={five} alt="" />
      </div>
    </>
  );
};

export default Banner;

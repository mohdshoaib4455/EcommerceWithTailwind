import React, { useRef } from "react";
import MySlider from "./MySlide";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const ReviewSection = () => {
  const arrowRef = useRef(null);
  
  return (
    <>
      <div className="w-full  h-auto flex justify-between items-center pt-10 px-4 sm:px-5 md:px-6">
        <h1 className="text-5xl font-bold">OUR HAPPY CUSTOMERS</h1>
        <div className="flex justify-between items-center gap-x-4">
          <FaArrowLeftLong
            onClick={() => arrowRef.current.slickPrev()}
            className="text-lg cursor-pointer"
          />
          <FaArrowRightLong
            onClick={() => arrowRef.current.slickNext()}
            className="text-lg cursor-pointer"
          />
        </div>
      </div>
      <div className="relative w-full h-auto     pt-10 mt-0 mb-45 overflow-hidden">
        <div className=" hidden sm:block absolute z-10 left-0 top-0 h-full w-100 bg-gradient-to-r from-white via-white/30 to-transparent blur-5xl" />
        <div className="w-full h-full">
          <MySlider arrowRef={arrowRef} />
        </div>
        <div className=" hidden sm:block absolute right-0 top-0 h-full w-100 bg-gradient-to-l from-white via-white/30 to-transparent blur-5xl" />
      </div>
    </>
  );
};

export default ReviewSection;

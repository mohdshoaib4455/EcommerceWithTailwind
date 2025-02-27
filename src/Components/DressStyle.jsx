import React from "react";
import casual from "../images/Frame61.png";
import casual2 from "../images/Frame62.png";
const DressStyle = () => {
  return (
    <>
      <div className="px-4 md:py-10 mt-16  md:px-6">
        <div className="w-full py-17 md:py-16 px-4 sm:px-15 h-auto md:h-200 bg-[#F0F0F0] rounded-4xl flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-5xl text-center font-sans uppercase font-bold ">
            BROWSE BY dress STYLE
          </h1>
          <div className="w-full flex flex-col md:flex-row  justify-between mt-15">
            <div className="w-full md:w-[40%]  h-auto">
              <img className=" w-full h-48 md:h-72" src={casual} alt="" />
            </div>
            <div className=" w-full mt-4 md:m-0 md:w-[58%] h-auto">
              <img className=" w-full h-48 md:h-72" src={casual2} alt="" />
            </div>
          </div>
          <div className="w-full flex flex-col  md:flex-row-reverse  justify-between mt-4 md:mt-8">
            <div className="w-full md:w-[40%]  h-auto">
              <img className=" w-full h-48 md:h-72" src={casual} alt="" />
            </div>
            <div className=" w-full mt-4 md:m-0 md:w-[58%] h-auto">
              <img className=" w-full h-48 md:h-72" src={casual2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressStyle;

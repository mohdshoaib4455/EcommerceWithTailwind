import React from "react";

const Footer = () => {
  return (
    // bg-[#F0F0F0]
    <>
  
        <footer className="w-full  sm:px-5 md:px-6 bg-[#F0F0F0] relative h-35 mt-12">
          <div className="absolute w-[98%] flex flex-col md:flex-row bg-black rounded-2xl py-14 left-1/2 top-[-100%] -translate-x-1/2">
            <div className="w-full md:w-[50%]  px-6">
              <h1 className="text-white text-4xl font-extrabold font-sans">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </div>
            <div className="w-full md:w-[50%] px-6 py-6">
              <form className="w-full">
                <input
                  placeholder="Enter your email"
                  className="w-full py-2 px-4 rounded-3xl bg-white"
                  type="text"
                />
                <button className="bg-white w-full rounded-3xl py-2 mt-3 text-semibold">
                  Subscribe newsletter
                </button>
              </form>
            </div>
          </div>
        </footer>
        <div className="px-3 py-10 sm:px-5 pt-40 md:pt-10 md:px-6 bg-[#F0F0F0]">
          <div className=" flex flex-col md:flex-row justify-between ">
            <div>
              <h1 className="font-extrabold font-sans uppercase text-black text-4xl">
                Shop.co
              </h1>
              <p className="text-lg text-gray-800 my-6 font-sans">
                We have clothes that suit your style and <br /> which you’re
                proud to wear. From <br /> women to men.
              </p>
            </div>
            <div>
              <div>
                <h5 className="font-bold font-sans">Company</h5>
                <ul className="mt-8">
                  <li className="mt-2 font-sans">About</li>
                  <li className="mt-2 font-sans">Features</li>
                  <li className="mt-2 font-sans">Works</li>
                  <li className="mt-2 font-sans">Career</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-bold font-sans">Company</h5>
                <ul className="mt-8">
                  <li className="mt-2 font-sans">About</li>
                  <li className="mt-2 font-sans">Features</li>
                  <li className="mt-2 font-sans">Works</li>
                  <li className="mt-2 font-sans">Career</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-bold font-sans">Company</h5>
                <ul className="mt-8">
                  <li className="mt-2 font-sans">About</li>
                  <li className="mt-2 font-sans">Features</li>
                  <li className="mt-2 font-sans">Works</li>
                  <li className="mt-2 font-sans">Career</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-bold font-sans">Company</h5>
                <ul className="mt-8">
                  <li className="mt-2 font-sans">About</li>
                  <li className="mt-2 font-sans">Features</li>
                  <li className="mt-2 font-sans">Works</li>
                  <li className="mt-2 font-sans">Career</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Footer;

import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-170 bg-gray-300  flex justify-center ">
        <form className="outline-none bg-white flex flex-col justify-center w-1/3 h-1/2 gap-y-7 px-10 py-60 mt-20 rounded-lg ">
          <div className="w-full flex justify-between rounded">
            <button className=" cursor-pointer w-1/2 bg-black py-1.5 rounded-l-lg font-sans text-sm uppercase text-white font-semibold ">
              Sign up
            </button>
            <button className=" cursor-pointer w-1/2 bg-gray-300 py-1.5 rounded-r-lg font-sans text-sm uppercase text-white font-semibold  ">
              Sign in
            </button>
          </div>
          <h1 className="text-center uppercase font-semibold font-sans text-lg">
            Sign up
          </h1>
          <div className="flex flex-col">
            <label htmlFor="nameinput" className="text-black text-sm">
              Name
            </label>
            <input
              type="text"
              id="nameinput"
              className="outline-0 border-1 rounded-sm px-2 font-sans text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailinput" className="text-black text-sm">
              Email
            </label>
            <input
              type="text"
              id="emailinput"
              className="outline-0 border-1 rounded-sm px-2 font-sans text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Passwordinput" className="text-black text-sm">
              Password
            </label>
            <input
              type="text"
              id="Passwordinput"
              className="outline-0 border-1 rounded-sm px-2 font-sans text-black"
            />
          </div>
         
          <button className="w-full bg-gray-300 py-2 rounded-full uppercase font-semibold text-white">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

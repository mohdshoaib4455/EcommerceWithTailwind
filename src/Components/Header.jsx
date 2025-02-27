import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = () => {
  const [isopen, setisopen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(true);
  let menu = ["Shop", "On Sale", "New Arrivals", "Brands"];
  return (
    <>
      <header
        className="w-full   relative  h-12 
       flex justify-between items-center sm:px-5 md:px-6 md:py-10 border-b-1 border-gray-300"
      >
        <div className="flex ">
          <span onClick={() => setisopen(!isopen)} className="block  sm:hidden">
            {isopen ? <IoMdClose size={30} /> : <IoMenu size={30} />}
          </span>
         
            <Link
              to={"/"}
              className="text-sans text-xl sm:text-2xl font-extrabold"
            >
              SHOP.CO
            </Link>
          
        </div>
        <ul
          className={`flex bg-black ${
            isopen ? "block" : "hidden"
          } gap-x-6 px-4  sm:bg-white md:flex  justify-between absolute  sm:static sm:flex-row  left-0 flex-col   py-10 sm:p-0 top-16 z-1  w-full sm:w-auto xl:w-100 `}
        >
          {menu.map((items) => (
            <li
              className="my-2 text-white sm:text-black  cursor-pointer text-md font-semibold"
              key={items}
            >
              {items}
            </li>
          ))}
        </ul>
        <form className="absolute px-1 md:static py-2 top-12 md:top-20 left-0 bg-black md:bg-transparent  w-full md:w-60 lg:w-100 sm:px-5 md:px-6">
          <div className={`relative  py-3 flex justify-between items-center`}>
            <input
              className="w-full  h-10 px-10   outline-0 bg-gray-200 placeholder:text-sm  py-1.5 sm:py-1 rounded-4xl"
              placeholder="Search here ..."
              type="text"
            />
            <button className="absolute cursor-pointer top-5  left-3 ">
              <IoIosSearch size={26} />
            </button>
          </div>
        </form>

        <div className="flex gap-x-5  sm:gap-5 ">
          <span>
            <LuShoppingCart size={25} />
          </span>
          <span>
            <MdAccountCircle size={25} />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;

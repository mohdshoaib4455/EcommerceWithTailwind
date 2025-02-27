import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/StoreContext";

const SectionOne = ({ Title, shirt }) => {
  const [view, setView] = useState(4);
  const { addToCart } = useContext(StoreContext);
  const handleViewChange = () => {
    setView(5);
  };

  return (
    <>
      <div className="mt-12 sm:mt-18 flex flex-col justify-center items-center px-4 w-full">
        <h1 className="text-3xl md:text-5xl mb-8 font-bold font-sans uppercase">
          {Title}
        </h1>

        <div className="w-full  flex flex-wrap justify-center mt-8 md:mt-14">
          {shirt.slice(0, view).map((items) => (
            <div key={items.id} className="max-w-[100%]  sm:max-w-[32%] sm:mx-1 md:max-w-[32%] md:mx-1 lg:max-w-70 lg:mx-0 px-2 my-1">
              <Link to={`/product/${items.id}`} key={items.id}>
                <img
                  className="rounded-lg bg-[#F0EEED]"
                  src={items.thumbnail}
                  alt="product image"
                />
              </Link>
              <div className="px-0 py-3">
                <h5 className="text-xl font-semibold font-sans tracking-tight text-black h-15 overflow-hidden line-clamp-2">
                  {items.title}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-black/10 text-black text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                    {Math.round(items.rating)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">
                    ₹{Math.round(87 * items.price)}
                  </span>
                  <button
                    onClick={() => addToCart(items)}
                    className="text-white cursor-pointer bg-black font-medium rounded text-sm px-4 py-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {view === 4 && (
          <button
            onClick={handleViewChange}
            className="w-full sm:w-1/2 md:w-56 h-14 lg:w-1/5 mt-6 md:mt-9 font-sans border-1 rounded-full"
          >
            View more
          </button>
        )}
      </div>
    </>
  );
};

export default SectionOne;

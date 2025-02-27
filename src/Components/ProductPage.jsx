import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { StoreContext } from "../store/StoreContext";
const ProductPage = () => {
  const { id } = useParams();
  const [SingleProduct, setSingleProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { addToCart } = useContext(StoreContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
        setMainImage(data.thumbnail);
      });
  }, [id]);

  if (!SingleProduct) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full h-auto px-1 mt-30 sm:px-5 md:px-6  mb-40 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:flex flex-col lg:flex-row  justify-between">
          <div className=" w-full lg:w-1/4 h-auto lg:h-full flex justify-between gap-x-1 lg:gap-x-0 lg:flex-col">
            {SingleProduct?.images?.slice(1).map((image, index) => (
              <div
                key={index}
                className="w-35 h-40 cursor-pointer border-1 border-gray-700 hover:border-white rounded-lg overflow-hidden"
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover bg-gray-400"
                />
              </div>
            ))}
          </div>
          {/* main img */}
          <div className=" w-full sm:w-115 mt-3 lg:mt-0 rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-full object-cover bg-gray-400 rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full lg:pl-10 flex justify-center py-15 items-center">
          <div className=" rounded-lg">
            <h1 className="text-3xl font-bold font-sans mb-4">
              {SingleProduct.title}
            </h1>
            <p className="text-2xl text-black font-sans font-semibold mb-6">
              ₹{Math.round(87 * SingleProduct.price)}
            </p>
            <p className="text-gray-700 mb-8 font-sans">
              {SingleProduct.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold font-sans mb-4">
                Select Size
              </h2>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border-2 border-gray-700 hover:border-white rounded-lg cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
  
              className="w-full bg-black  cursor-pointer    text-white py-3 rounded-full font-semibold  transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

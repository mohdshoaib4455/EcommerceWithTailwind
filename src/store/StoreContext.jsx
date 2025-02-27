import { createContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [shirt, setShirt] = useState([]);
  const [womenCloth, setWomenCloth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const res1 = await fetch(
        "https://dummyjson.com/products/category/mens-shirts"
      );
      const data1 = await res1.json();
      setShirt(data1.products);

      const res2 = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );
      const data2 = await res2.json();
      setWomenCloth(data2.products);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

 
  return (
    <StoreContext.Provider
      value={{
        loading,
        setLoading,
        womenCloth,
        setWomenCloth,
        shirt,
        setShirt,
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

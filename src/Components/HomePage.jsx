import React, { useContext, useEffect } from "react";
import Loader from "./Loader";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import DressStyle from "./DressStyle";
import ReviewSection from "./ReviewSection";
import { StoreContext } from "../store/StoreContext";

const HomePage = () => {
  const { loading, womenCloth, shirt } = useContext(StoreContext);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Banner />
          <SectionOne shirt={shirt} Title={"Mens Shirt"} />
          <SectionOne shirt={womenCloth} Title={"womens Dresses"} />
          <DressStyle />
          <ReviewSection />
        </>
      )}
    </>
  );
};

export default HomePage;

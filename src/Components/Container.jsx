import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen bg-white">{children}</div>
    </>
  );
};

export default Container;

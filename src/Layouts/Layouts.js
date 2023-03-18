import React from "react";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";


const Layouts = ({ children }) => {
  //console.log(children);

  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;

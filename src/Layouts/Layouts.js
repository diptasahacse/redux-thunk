import React from "react";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";
import { useLocation, useNavigate } from "react-router-dom";

const Layouts = ({ children }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];


  return (
    <>
      {pathName !== "dashboard" && <MyNavbar />}

      {children}
      {pathName !== "dashboard" && <Footer />}
    </>
  );
};

export default Layouts;

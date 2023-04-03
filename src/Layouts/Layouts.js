import React from "react";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Layouts = ({ children }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];


  return (
    <>
      {pathName !== "dashboard" && <MyNavbar />}

      {children}
      {pathName !== "dashboard" && <Footer />}
      <ToastContainer />
    </>
  );
};

export default Layouts;

import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").reverse()[0];
  const [isToggle, setToggle] = useState(false);

  return (
    <div id="wrapper" className="d-flex align-items-stretch">
      <div className={`${isToggle ? "toggle" : ""}`} id="sidebar-wrapper">
        <div className="sidebar-header">
          
          <Link
            className="icon-link back-to-home d-flex align-items-center"
            to="/"
          >
            <span>
              <i className="ri-home-4-fill"></i>
            </span>
          <span className="ms-2">
          Home
          </span>
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul className="p-0">
            <li>
              <Link
                to="/dashboard"
                className={`${pathName === "dashboard" ? "active" : ""}`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/product-list"
                className={`${pathName === "product-list" ? "active" : ""}`}
              >
                Product List
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/add-products"
                className={`${pathName === "add-products" ? "active" : ""}`}
              >
                Add Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="page-content-wrapper">
        <div className="dashboard-nav">
          <div>
            <button
              className="toggle-button"
              onClick={() => setToggle(!isToggle)}
            >
              <span>
                <i className="ri-menu-2-line"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="dashboard-content-area">
          <div className="dashboard-inner-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

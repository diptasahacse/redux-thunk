import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").reverse()[0];
  const [isToggle, setToggle] = useState(false);
  console.log(pathName);
  return (
    <div id="wrapper" className="d-flex align-items-stretch">
      <div className={`${isToggle ? "toggle" : ""}`} id="sidebar-wrapper">
        <div className="sidebar-header">Sidebar</div>
        <div className="sidebar-menu">
          <ul className="p-0">
            <li>
              <Link to="/dashboard" className={`${pathName === "dashboard" ? "active" : ""}`}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-list"
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
          <button
            className="btn btn-primary"
            onClick={() => setToggle(!isToggle)}
          >
            Toggle
          </button>
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

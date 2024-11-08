import React from "react";
import "./Sidebar.css";
import kotak1 from "../../assets/icon/kotak1.png";
import kotak2 from "../../assets/icon/kotak2.png";
import homeIc from "../../assets/icon/fi_home.png";
import truckIc from "../../assets/icon/fi_truck.png";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <div className="col-lg-2 pe-0">
      <div className="container-fluid sidebar-container p-0">
        <div className="row">
          <div className="col-4 pt-1 p-3 sidebar-container-menu d-flex flex-column align-items-center justify-content-top">
            <div className="kotak text-center m-2">
              <img src={kotak1} alt="" />
            </div>
            <div className="home text-center m-2">
              <a href="#">
                <img src={homeIc} alt="" />
                <p>Dashboard</p>
              </a>
            </div>
            <div className="cars text-center m-2">
              <a href="admin-cars.html">
                <img src={truckIc} alt="" />
                <p>Cars</p>
              </a>
            </div>
          </div>
          <div className="col-8 pt-1 p-3 sidebar-container-content d-flex flex-column align-items-left justify-content-top">
            <img src={kotak2} alt="" />
            <p className="mt-3">
              <Link
                to="/"
                style={{ fontWeight: 700, textDecoration: "none" }}
              >
                Cars
              </Link>
            </p>
            <p className="mt-3">
              <Link
                to="/manufactures"
                style={{ fontWeight: 700, textDecoration: "none" }}
              >
                Manufactures
              </Link>
            </p>
            <p className="mt-3">
              <Link
                to="/types"
                style={{ fontWeight: 700, textDecoration: "none" }}
              >
                Types
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

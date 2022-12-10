import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

/*import React from "react";*/
import { Outlet } from "react-router-dom";
import "./Main.css";
import Navbar from "../components/Navbar";


const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";


const Body = () => {
  return (
    <div className="flex">
       <Header/>
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default Body;

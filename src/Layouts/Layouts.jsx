import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

const Layouts = () => {
  return (
    <div className="p-10 flex justify-center items-center bg-gray-200">
      <div className="bg-white min-h-[calc(100vh-70px)] w-full flex flex-col justify-start ">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layouts;

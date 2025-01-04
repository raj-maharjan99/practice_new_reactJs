import React from "react";
import { Outlet } from "react-router-dom";
import { DropDown } from "./DropDown";

const RootLayout = () => {
  return (
    <>
      <DropDown />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default RootLayout;

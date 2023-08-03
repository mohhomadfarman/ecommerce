import React, { memo } from "react";
import Mainheader from "../component/header/Mainheader";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Mainheader />
      <Outlet />
    </>
  );
};

export default memo(AdminLayout);

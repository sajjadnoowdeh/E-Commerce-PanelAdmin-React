import React from "react";

import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  ).currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
